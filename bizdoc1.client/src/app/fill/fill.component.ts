import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DocumentModel, MailboxService, RecipientModel } from '@bizdoc/core';

@Component({
  selector: 'app-fill',
  standalone: false,
  templateUrl: './fill.component.html',
  styleUrl: './fill.component.css'
})
export class FormComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _mailbox = inject(MailboxService);

  document!: RecipientModel;
  model: Data = {};

  ngOnInit(): void {
    this._route.data.subscribe(d =>
      this.document = d['data']);
  }
  /** */
  submit() {
    this._mailbox.submit(this.document.id, this.document.version,
      this.document.formId, this.model).subscribe({});
  }
}
