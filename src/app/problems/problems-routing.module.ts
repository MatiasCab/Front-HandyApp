import { ProblemsSearchComponent } from '../problems/components/problems-search/problems-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: ProblemsSearchComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProblemsRoutingModule { }

