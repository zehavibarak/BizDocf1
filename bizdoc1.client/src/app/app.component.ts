import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Form, MailboxService, Popup, SessionService } from '@bizdoc/core';
import { CredentialsService } from './core/credentials.service';
import { UserProfile } from './user-profile/user-profile';

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

  @HostBinding('dir') dir = this.session.direction;

  ngOnInit(): void {
  }
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
