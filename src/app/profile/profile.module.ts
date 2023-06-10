import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from "../shared/shared.module";
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileReviewsComponent } from './components/profile-reviews/profile-reviews.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FriendBtnComponent } from './components/friend-btn/friend-btn.component';
import { EditBtnComponent } from './components/edit-btn/edit-btn.component';


@NgModule({
    declarations: [
        ProfileComponent,
        ProfileInfoComponent,
        ProfileReviewsComponent,
        SkillsComponent,
        FriendBtnComponent,
        EditBtnComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule
    ]
})
export class ProfileModule { }
