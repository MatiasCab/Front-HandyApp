import { ProblemsSearchComponent } from '../problems/components/problems-search/problems-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemViewPageComponent } from './components/problem-view-page/problem-view-page.component';

const routes: Routes = [
    {
        path: '', 
        component: ProblemsSearchComponent
    },
    {
        path: ':problemId',
        component: ProblemViewPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProblemsRoutingModule { }

