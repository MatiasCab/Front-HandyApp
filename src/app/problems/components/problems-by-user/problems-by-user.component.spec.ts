import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsByUserComponent } from './problems-by-user.component';

describe('ProblemsByUserComponent', () => {
  let component: ProblemsByUserComponent;
  let fixture: ComponentFixture<ProblemsByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemsByUserComponent]
    });
    fixture = TestBed.createComponent(ProblemsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
