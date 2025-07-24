import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { GuideService, Popup, SessionService } from '@bizdoc/core';
import { CredentialsService } from './core/credentials.service';
import { UserProfile } from './user-profile/user-profile';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //template: '<bizdoc></bizdoc>',
})
export class AppComponent implements OnInit {
  public readonly session = inject(SessionService);
  private readonly _popup = inject(Popup);
  private readonly _credentials = inject(CredentialsService);
  private readonly _router = inject(Router);

  @HostBinding('dir') dir = this.session.direction;

  private readonly _loading$ = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loading$.asObservable();

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart)
        this._loading$.next(true);
      else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
        this._loading$.next(false);
    });
  }
  loading = false;
  /** */
  disconnect() {
    this._credentials.disconnect();
  }
  /**
   * 
   * @param evt
   */
  profile(evt: MouseEvent) {
    this._popup.open(UserProfile, evt.target as HTMLElement).
      closed().subscribe();
  }

}
