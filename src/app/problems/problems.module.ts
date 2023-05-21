import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemComponent } from './components/problem/problem.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ProblemsGridComponent } from './components/problems-grid/problems-grid.component';
import { TagComponent } from './components/tag/tag.component';
import { ProblemsSearchComponent } from './components/problems-search/problems-search.component';

@NgModule({
  declarations: [
    TagComponent,
    ProblemComponent,
    SkillListComponent,
    ProblemsGridComponent,
    ProblemsSearchComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class ProblemsModule { }
