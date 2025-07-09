import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Form, MailboxService, Popup, SessionService } from '@bizdoc/core';
import { CredentialsService } from '@bizdoc/credentials';
import { UserProfile } from './user-profile/user-profile';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //template: '<bizdoc></bizdoc>',
})
export class AppComponent implements OnInit {
  private readonly _session = inject(SessionService);
  private readonly _popup = inject(Popup);

  @HostBinding('dir') dir = this._session.direction;
  ok!: boolean;

  ngOnInit(): void {
    this.ok = this._session.ok;
  }
  /** */
  disconnect() {
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
