
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyProblemsComponent } from './components/my-problems/my-problems.component';
import { AddEditProblemComponent } from './components/add-edit-problem/add-edit-problem.component';
import { AuthGuard } from '../core/guards/auth-guard.guard';

const routes: Routes = [
    {
        path: '', 
        component: MyProblemsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'add-problem',
        component: AddEditProblemComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-problem/:problemId',
        component: AddEditProblemComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyProblemsRoutingModule { }

