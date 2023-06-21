import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProblemComponent } from './add-edit-problem.component';

describe('AddEditProblemComponent', () => {
  let component: AddEditProblemComponent;
  let fixture: ComponentFixture<AddEditProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
