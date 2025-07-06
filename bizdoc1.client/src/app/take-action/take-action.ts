import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action, ActionDialog, MailboxService, RecipientModel, SessionService } from '@bizdoc/core';
import { Toast } from '../toast';
import { MatDialog } from '@angular/material/dialog';
import { playSound } from './playSound';

@Component({
  selector: 'app-take-action',
  standalone: false,
  templateUrl: './take-action.html',
  styleUrl: './take-action.css'
})
export class TakeAction {
  private readonly _route = inject(ActivatedRoute);
  private readonly _mailbox = inject(MailboxService);
  private readonly _router = inject(Router);
  private readonly _toast = inject(Toast);
  private readonly _dialog = inject(MatDialog);
  private readonly _session = inject(SessionService);

  document!: RecipientModel;
  actions!: Action[];

  ngOnInit(): void {
    this._route.data.subscribe(d => {
      this.document = d['data'];
      this.actions = this._session.profile.actions.
        filter(a => this.document.actions!.indexOf(a.name) > -1)
    });
  }
  /** */
  ok(action: Action) {
//    this._dialog.open(ActionDialog, {}).afterClosed().subscribe(args =>
    //args &&
      this._mailbox.send(this.document.id, this.document.version,
        this.document.formId,
        this.document.model, action.name, {}).subscribe({
          next: () => {
            playSound();
            this._toast.message(action.past || action.name);
            this._router.navigate(['/zone']);
          }
        })
  //  );
  }
}

