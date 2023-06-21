
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyProblemsComponent } from './components/my-problems/my-problems.component';
import { AddEditProblemComponent } from './components/add-edit-problem/add-edit-problem.component';

const routes: Routes = [
    {
        path: '', 
        component: MyProblemsComponent
    },
    {
        path: 'add-problem',
        component: AddEditProblemComponent
    },
    {
        path: 'edit-problem/:problemId',
        component: AddEditProblemComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyProblemsRoutingModule { }

