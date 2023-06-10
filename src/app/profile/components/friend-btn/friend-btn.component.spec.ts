import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendBtnComponent } from './friend-btn.component';

describe('FriendBtnComponent', () => {
  let component: FriendBtnComponent;
  let fixture: ComponentFixture<FriendBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
