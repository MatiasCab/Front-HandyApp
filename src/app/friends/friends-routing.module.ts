import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfriendsComponent } from './components/addfriends/addfriends.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';
import { AuthGuard } from '../core/guards/auth-guard.guard';

const routes: Routes = [
  {
      path: '', 
      component: MyfriendsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'addfriends',
      component: AddfriendsComponent,
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
