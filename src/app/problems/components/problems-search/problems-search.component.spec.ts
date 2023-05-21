import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsSearchComponent } from './problems-search.component';

describe('ProblemsSearchComponent', () => {
  let component: ProblemsSearchComponent;
  let fixture: ComponentFixture<ProblemsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
