import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Form, MailboxService, SessionService } from '@bizdoc/core';
import { CredentialsService } from '@bizdoc/credentials';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //template: '<bizdoc></bizdoc>',
})
export class AppComponent implements OnInit {
  private readonly _session = inject(SessionService);

  ngOnInit(): void {
  }
}
