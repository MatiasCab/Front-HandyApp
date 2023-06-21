import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProblemModalComponent } from './delete-problem-modal.component';

describe('DeleteProblemModalComponent', () => {
  let component: DeleteProblemModalComponent;
  let fixture: ComponentFixture<DeleteProblemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProblemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProblemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
