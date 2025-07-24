import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Form, SessionService, MailboxService } from '@bizdoc/core';

@Component({
  selector: 'app-select-form',
  standalone: false,
  templateUrl: './select-form.html',
  styleUrl: './select-form.css'
})
export class SelectFormComponent {
  private readonly _session = inject(SessionService);
  private readonly _mailbox = inject(MailboxService);
  private readonly _router = inject(Router);

  forms!: Form[];

  ngOnInit(): void {
    this.forms = this._session.profile.forms;
  }
  /**
   * 
   * @param form
   */
  create(form: Form) {
    this._mailbox.create(form.name).subscribe(e => {
      this._router.navigate(['fill', e.id], {
        state: { data: e },
        replaceUrl: true
      });
    });
  }

}
