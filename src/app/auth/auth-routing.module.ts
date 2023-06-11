import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { ChangeComponent } from './components/change/change.component';
import { SignupComponent } from './components/signup/signup.component';

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
        path: 'recoverpassword',
        component: RecoverComponent,
        data: {  }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
