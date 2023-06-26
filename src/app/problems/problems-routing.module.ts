import { ProblemsSearchComponent } from '../problems/components/problems-search/problems-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemViewPageComponent } from './components/problem-view-page/problem-view-page.component';
import { AuthGuard } from '../core/guards/auth-guard.guard';
import { ProblemsByUserComponent } from './components/problems-by-user/problems-by-user.component';

const routes: Routes = [
    {
        path: '', 
        component: ProblemsSearchComponent,
        canActivate: [AuthGuard]
    },
    {
        path: ':problemId',
        component: ProblemViewPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'by-user/:problemId',
        component: ProblemsByUserComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProblemsRoutingModule { }

