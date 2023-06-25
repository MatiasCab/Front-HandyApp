import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProblemComponent } from './components/problem-card/problem.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ProblemsGridComponent } from './components/problems-grid/problems-grid.component';
import { TagComponent } from './components/tag/tag.component';
import { LongCardComponent } from './components/long-card/long-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OrderByFilterComponent } from './components/order-by-filter/order-by-filter.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { MapComponent } from './components/map/map.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ 
    ProblemComponent,
    SkillListComponent,
    ProblemsGridComponent,
    TagComponent,
    LongCardComponent,
    UserCardComponent,
    SearchBarComponent,
    OrderByFilterComponent,
    ActionButtonsComponent,
    MapComponent,
    ProfileInfoComponent
   ],
  exports: [ 
    ProblemsGridComponent,
    SearchBarComponent,
    ProblemComponent,
    SkillListComponent,
    OrderByFilterComponent,
    TagComponent,
    MapComponent,
    ProfileInfoComponent
   ]
})
export class SharedModule { }