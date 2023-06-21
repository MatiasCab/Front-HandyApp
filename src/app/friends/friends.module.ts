import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendItemComponent } from './components/friend-item/friend-item.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';
import { AddfriendsComponent } from './components/addfriends/addfriends.component';


@NgModule({
  declarations: [
    FriendItemComponent,
    MyfriendsComponent,
    AddfriendsComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule
  ]
})
export class FriendsModule { }
