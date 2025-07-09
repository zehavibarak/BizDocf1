import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '@bizdoc/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const credentialsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const session = inject(SessionService);

  if (session.ok)
    return true;

  return session.refresh().pipe(
    map(() => true),
    catchError(e =>
      of(router.parseUrl(`/access?r=${state.url}`))
    ))
};
