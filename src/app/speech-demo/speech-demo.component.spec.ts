import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechDemoComponent } from './speech-demo.component';

describe('SpeechDemoComponent', () => {
  let component: SpeechDemoComponent;
  let fixture: ComponentFixture<SpeechDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
