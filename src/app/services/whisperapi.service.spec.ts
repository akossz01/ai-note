import { TestBed } from '@angular/core/testing';

import { WhisperapiService } from './whisperapi.service';

describe('WhisperapiService', () => {
  let service: WhisperapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhisperapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
