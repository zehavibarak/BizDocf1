import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class Toast {
  private readonly _snackbar = inject(MatSnackBar);

  message(text: string) {
    this._snackbar.open(text, undefined, { duration: 3000 });
  }
}
