import { TestBed } from '@angular/core/testing';

import { DiaChiService } from './dia-chi.service';

describe('DiaChiService', () => {
  let service: DiaChiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaChiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
