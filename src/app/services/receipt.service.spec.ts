import { TestBed } from '@angular/core/testing';

import { ReceiptsService } from './store.service';

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
