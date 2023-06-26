import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProblemInfoComponent } from './new-problem-info.component';

describe('NewProblemInfoComponent', () => {
  let component: NewProblemInfoComponent;
  let fixture: ComponentFixture<NewProblemInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProblemInfoComponent]
    });
    fixture = TestBed.createComponent(NewProblemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
