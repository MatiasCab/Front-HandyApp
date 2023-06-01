import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProblemComponent } from './components/problem-card/problem.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ProblemsGridComponent } from './components/problems-grid/problems-grid.component';
import { TagComponent } from './components/tag/tag.component';
import { LongCardComponent } from './components/long-card/long-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [ 
    ProblemComponent,
    SkillListComponent,
    ProblemsGridComponent,
    TagComponent,
    LongCardComponent,
    UserCardComponent
   ],
  exports: [ 
    ProblemsGridComponent
   ]
})
export class SharedModule { }