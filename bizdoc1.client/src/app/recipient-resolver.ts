import { ResolveFn } from '@angular/router';

export const recipientResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
