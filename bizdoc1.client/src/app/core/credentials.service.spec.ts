import { TestBed } from '@angular/core/testing';

import { CredentialsService } from './credentials.service';

describe('Credentials', () => {
  let service: CredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
