import { TestBed } from '@angular/core/testing';

import { CurrentLoginService } from './current-login.service';

describe('CurrentLoginService', () => {
  let service: CurrentLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
