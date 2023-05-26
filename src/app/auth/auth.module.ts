import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { RecoverComponent } from './components/recover/recover.component';
import { ChangeComponent } from './components/change/change.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    UserInputComponent,
    RecoverComponent,
    ChangeComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
