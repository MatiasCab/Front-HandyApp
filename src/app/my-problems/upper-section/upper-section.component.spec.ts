import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSectionComponent } from './upper-section.component';

describe('UpperSectionComponent', () => {
  let component: UpperSectionComponent;
  let fixture: ComponentFixture<UpperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
