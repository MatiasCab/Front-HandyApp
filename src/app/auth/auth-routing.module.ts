import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemsSearchComponent } from '../problems/components/problems-search/problems-search.component';

const routes: Routes = [
    {
        path: 'problems', component: ProblemsSearchComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
