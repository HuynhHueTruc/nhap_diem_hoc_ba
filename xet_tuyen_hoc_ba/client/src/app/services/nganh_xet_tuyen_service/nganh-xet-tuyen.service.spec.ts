import { TestBed } from '@angular/core/testing';

import { NganhXetTuyenService } from './nganh-xet-tuyen.service';

describe('NganhXetTuyenService', () => {
  let service: NganhXetTuyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NganhXetTuyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
