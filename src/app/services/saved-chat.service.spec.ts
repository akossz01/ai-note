import { TestBed } from '@angular/core/testing';

import { SavedChatService } from './saved-chat.service';

describe('SavedChatService', () => {
  let service: SavedChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
