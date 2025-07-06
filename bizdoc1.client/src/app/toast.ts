import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from '@bizdoc/core';

@Injectable({
  providedIn: 'root'
})
export class Toast {
  private readonly _snackbar = inject(MatSnackBar);
  private readonly _session = inject(SessionService);

  message(text: string) {
    this._snackbar.open(text, undefined, {
      duration: 3000,
      direction: this._session.inverse ? 'rtl' : 'ltr'
    });
  }
}
