import { Injectable } from '@angular/core';
import { AuthenticationImpl } from '@bizdoc/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService extends AuthenticationImpl {
  override authenticate(): Promise<any> {
    throw 'authenticate!';
  }
  override disconnect(): Promise<any> {
    sessionStorage.removeItem('form_token');
    localStorage.removeItem('form_token');
    location.assign('/');
    return Promise.resolve();
  }
  override getAuthToken(): Promise<string | null | undefined> {
    const accessToken = sessionStorage.getItem('form_token') ||
      localStorage.getItem('form_token');
    return Promise.resolve(accessToken);
  }
}
