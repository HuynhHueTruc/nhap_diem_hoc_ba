import { TestBed } from '@angular/core/testing';

import { NganhTotNghiepService } from './nganh-tot-nghiep.service';

describe('NganhTotNghiepService', () => {
  let service: NganhTotNghiepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NganhTotNghiepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
