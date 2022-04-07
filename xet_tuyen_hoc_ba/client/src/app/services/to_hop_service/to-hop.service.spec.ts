import { TestBed } from '@angular/core/testing';

import { ToHopService } from './to-hop.service';

describe('ToHopService', () => {
  let service: ToHopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToHopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
