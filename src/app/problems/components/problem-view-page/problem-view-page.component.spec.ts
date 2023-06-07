import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemViewPageComponent } from './problem-view-page.component';

describe('ProblemViewPageComponent', () => {
  let component: ProblemViewPageComponent;
  let fixture: ComponentFixture<ProblemViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
