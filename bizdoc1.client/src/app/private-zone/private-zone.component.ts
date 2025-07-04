import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Folder, Form, MailboxService, SessionService } from '@bizdoc/core';

@Component({
  selector: 'app-private-zone',
  standalone: false,
  templateUrl: './private-zone.component.html',
  styleUrl: './private-zone.component.css'
})
export class PrivateZoneComponent implements OnInit {
  private readonly _session = inject(SessionService);
  private readonly _mailbox = inject(MailboxService);
  private readonly _router = inject(Router);

  forms!: Form[];
  folders!: Folder[];

  ngOnInit(): void {
    this.forms = this._session.profile.forms;
    this.folders = this._session.profile.folders;
  }
  /**
   * 
   * @param form
   */
  create(form: Form) {
    this._mailbox.create(form.name).subscribe(e => {
      this._router.navigate(['/form', e.id], { state: { data: e } });
    });
  }
}
