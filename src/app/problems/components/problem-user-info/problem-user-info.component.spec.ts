import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemUserInfoComponent } from './problem-user-info.component';

describe('ProblemUserInfoComponent', () => {
  let component: ProblemUserInfoComponent;
  let fixture: ComponentFixture<ProblemUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
