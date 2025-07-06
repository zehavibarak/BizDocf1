import { Component, inject, OnInit } from '@angular/core';
import { SessionService } from '@bizdoc/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile implements OnInit {
  private readonly _session = inject(SessionService);
  languages!: string[];

  ngOnInit(): void {
    this.languages = this._session.languages;
  }

  changeLang(lang: string) {
    this._session.language = lang;
    window.location.reload();
  }
}
