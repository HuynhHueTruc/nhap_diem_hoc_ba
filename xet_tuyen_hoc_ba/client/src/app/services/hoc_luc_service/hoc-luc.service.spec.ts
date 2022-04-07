import { TestBed } from '@angular/core/testing';

import { HocLucService } from './hoc-luc.service';

describe('HocLucService', () => {
  let service: HocLucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HocLucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
