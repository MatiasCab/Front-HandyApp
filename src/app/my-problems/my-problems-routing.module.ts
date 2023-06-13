
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProblemsComponent } from './my-problems/my-problems.component';

const routes: Routes = [
    {
        path: '', 
        component: MyProblemsComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyProblemsRoutingModule { }

