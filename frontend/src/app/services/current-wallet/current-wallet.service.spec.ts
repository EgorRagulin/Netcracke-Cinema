import { TestBed } from '@angular/core/testing';

import { CurrentWalletService } from './current-wallet.service';

describe('CurrentWalletService', () => {
  let service: CurrentWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
