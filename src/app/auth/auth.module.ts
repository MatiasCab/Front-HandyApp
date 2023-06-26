import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { RecoverComponent } from './components/recover/recover.component';
import { ChangeComponent } from './components/change/change.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyComponent } from './components/verify/verify.component';
import { LocationComponent } from './components/location/location.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        LoginComponent,
        UserInputComponent,
        RecoverComponent,
        ChangeComponent,
        SignupComponent,
        VerifyComponent,
        LocationComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        NgbModule,
        SharedModule
    ]
})
export class AuthModule { }
