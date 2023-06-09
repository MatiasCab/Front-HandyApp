import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReviewsComponent } from './profile-reviews.component';

describe('ProfileReviewsComponent', () => {
  let component: ProfileReviewsComponent;
  let fixture: ComponentFixture<ProfileReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
