import { Injectable } from '@angular/core';
import { AuthenticationImpl } from '@bizdoc/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService extends AuthenticationImpl {
  override authenticate(): Promise<any> {
    return Promise.reject(false);
  }
  override disconnect?(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  override getAuthToken(): Promise<string | null | undefined> {
    const accessToken = sessionStorage.getItem('form_token') ||
      localStorage.getItem('form_token');
    return Promise.resolve(accessToken);
  }
}
