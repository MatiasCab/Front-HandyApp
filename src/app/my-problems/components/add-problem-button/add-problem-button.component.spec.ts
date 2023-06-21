import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProblemButtonComponent } from './add-problem-button.component';

describe('AddProblemButtonComponent', () => {
  let component: AddProblemButtonComponent;
  let fixture: ComponentFixture<AddProblemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProblemButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProblemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
