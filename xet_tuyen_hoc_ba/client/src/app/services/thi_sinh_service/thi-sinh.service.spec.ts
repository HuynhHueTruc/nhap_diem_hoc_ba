import { TestBed } from '@angular/core/testing';

import { ThiSinhService } from './thi-sinh.service';

describe('ThiSinhService', () => {
  let service: ThiSinhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThiSinhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
