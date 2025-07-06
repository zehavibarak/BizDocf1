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

  folders!: Folder[];
  messagesCount?: number;

  ngOnInit(): void {
    const { folders, messagesCount } = this._session.profile;

    this.messagesCount = messagesCount;
    this.folders = folders;

    //this._mailbox.changed.subscribe(e => { })
  }
}
