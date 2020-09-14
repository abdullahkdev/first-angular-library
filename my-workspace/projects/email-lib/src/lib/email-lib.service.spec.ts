import { TestBed } from '@angular/core/testing';

import { EmailLibService } from './email-lib.service';

describe('EmailLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailLibService = TestBed.get(EmailLibService);
    expect(service).toBeTruthy();
  });
});
