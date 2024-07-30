import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptResRoleStreamComponent } from './prompt-res-role-stream.component';

describe('PromptResRoleStreamComponent', () => {
  let component: PromptResRoleStreamComponent;
  let fixture: ComponentFixture<PromptResRoleStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptResRoleStreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptResRoleStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
