import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { ChangeComponent } from './components/change/change.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyComponent } from './components/verify/verify.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {  }
    },
    {
        path: 'register',
        component: SignupComponent,
        data: {  }
    },
    {
        path: 'changePassword',
        component: ChangeComponent,
        data: {  }
    },
    {
        path: 'verify',
        component: VerifyComponent,
        data: {  }
    },
    {
        path: 'addlocation',
        component: LocationComponent,
        data: {  }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
