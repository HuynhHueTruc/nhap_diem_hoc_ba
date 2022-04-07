import { TestBed } from '@angular/core/testing';

import { DangKyService } from './dang-ky.service';

describe('DangKyService', () => {
  let service: DangKyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DangKyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
