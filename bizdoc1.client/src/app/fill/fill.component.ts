import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailboxService, RecipientModel, TranslateService } from '@bizdoc/core';
import { Toast } from '../toast';
import { playSound } from '../take-action/playSound';

@Component({
  selector: 'app-fill',
  standalone: false,
  templateUrl: './fill.component.html',
  styleUrl: './fill.component.css'
})
export class FormComponent implements OnInit {
  private _translate = inject(TranslateService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _mailbox = inject(MailboxService);
  private readonly _router = inject(Router);
  private readonly _toast = inject(Toast);

  document!: RecipientModel;

  dirty: boolean = false;
  valid: boolean = false;

  ngOnInit(): void {
    this._route.data.subscribe(d =>
      this.document = d['data']);
  }
  /** */
  submit() {
    this._mailbox.submit(this.document.id, this.document.version,
      this.document.formId, this.document.model).subscribe({
        next: r => {
          playSound();
          this._toast.message(this._translate.get('Submitted', r.number));
          this._router.navigate(['/zone'])
        }
      });
  }
  /** */
  save() {
    this._mailbox.save(this.document.id, this.document.formId, this.document.version,
      this.document.model).subscribe({
        next: () =>
          this._toast.message('OK')
      });
  }
}
