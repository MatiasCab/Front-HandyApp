import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfriendsComponent } from './components/addfriends/addfriends.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';

const routes: Routes = [
  {
      path: '', 
      component: MyfriendsComponent
  },
  {
      path: 'addfriends',
      component: AddfriendsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
