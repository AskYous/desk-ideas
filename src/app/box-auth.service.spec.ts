import { TestBed } from '@angular/core/testing';

import { BoxAuthService } from './box-auth.service';

describe('BoxAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxAuthService = TestBed.get(BoxAuthService);
    expect(service).toBeTruthy();
  });
});
