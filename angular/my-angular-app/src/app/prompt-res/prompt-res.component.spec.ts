import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptResComponent } from './prompt-res.component';

describe('PromptResComponent', () => {
  let component: PromptResComponent;
  let fixture: ComponentFixture<PromptResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptResComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
