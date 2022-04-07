import { TestBed } from '@angular/core/testing';

import { NganhService } from './nganh.service';

describe('NganhService', () => {
  let service: NganhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NganhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
