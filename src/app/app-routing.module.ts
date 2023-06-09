import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'problems', loadChildren: () => import('./problems/problems.module').then(m => m.ProblemsModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'friends', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule)},
  {path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
  {path: 'my-problems', loadChildren: () => import('./my-problems/my-problems.module').then (m => m.MyProblemsModule)}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 