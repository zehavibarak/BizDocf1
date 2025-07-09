import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { recipientResolver } from './recipient-resolver';

describe('recipientResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => recipientResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
