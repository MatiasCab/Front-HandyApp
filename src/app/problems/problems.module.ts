import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsSearchComponent } from './components/problems-search/problems-search.component';
import { ProblemsRoutingModule } from './problems-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProblemViewPageComponent } from './components/problem-view-page/problem-view-page.component';
import { ProblemGeneralInfoComponent } from './components/problem-general-info/problem-general-info.component';
import { ProblemUserInfoComponent } from './components/problem-user-info/problem-user-info.component';
import { ButtonComponent } from './components/button/button.component';
import { ProblemReviewComponent } from './components/problem-review/problem-review.component';
import { ProblemsByUserComponent } from './components/problems-by-user/problems-by-user.component';

@NgModule({
  declarations: [
    ProblemsSearchComponent,
    ProblemViewPageComponent,
    ProblemGeneralInfoComponent,
    ProblemUserInfoComponent,
    ButtonComponent,
    ProblemReviewComponent,
    ProblemsByUserComponent
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    SharedModule
  ],
})
export class ProblemsModule { }
