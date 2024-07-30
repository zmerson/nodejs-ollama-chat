import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptResStreamComponent } from './prompt-res-stream.component';

describe('PromptResStreamComponent', () => {
  let component: PromptResStreamComponent;
  let fixture: ComponentFixture<PromptResStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptResStreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptResStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
