import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptResRoleComponent } from './prompt-res-role.component';

describe('PromptResRoleComponent', () => {
  let component: PromptResRoleComponent;
  let fixture: ComponentFixture<PromptResRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptResRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptResRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
