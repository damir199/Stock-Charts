import { TestBed } from '@angular/core/testing';

import { ReceiptsService } from './receipts.service';

describe('ReceiptService', () => {
  let service: ReceiptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
