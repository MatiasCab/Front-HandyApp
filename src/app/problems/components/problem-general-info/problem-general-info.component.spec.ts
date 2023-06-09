import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemGeneralInfoComponent } from './problem-general-info.component';

describe('ProblemGeneralInfoComponent', () => {
  let component: ProblemGeneralInfoComponent;
  let fixture: ComponentFixture<ProblemGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemGeneralInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
