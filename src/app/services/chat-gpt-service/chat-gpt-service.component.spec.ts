import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGptServiceComponent } from './chat-gpt-service.component';

describe('ChatGptServiceComponent', () => {
  let component: ChatGptServiceComponent;
  let fixture: ComponentFixture<ChatGptServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGptServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGptServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
