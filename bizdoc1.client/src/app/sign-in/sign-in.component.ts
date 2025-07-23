import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CredentialsService } from '@bizdoc/credentials';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private readonly _credentials = inject(CredentialsService);
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);

  readonly form = this._fb.group({
    username: this._fb.control<string | null>(null, Validators.required),
    password: this._fb.control<string | null>(null, Validators.required),
  });
  /** */
  signIn() {
    const { username, password } = this.form.value;
    this._credentials.signIn(username!, password!, { rememberMe: true }).subscribe({
      next: () => {
        const url = this._route.snapshot.queryParams['r'];

        this._router.navigateByUrl(url || '/zone');
      }
    });
  }
}
