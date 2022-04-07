import { TestBed } from '@angular/core/testing';

import { DiemService } from './diem.service';

describe('DiemService', () => {
  let service: DiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
