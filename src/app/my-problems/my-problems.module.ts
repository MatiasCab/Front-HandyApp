import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UpperSectionComponent } from './upper-section/upper-section.component';
import { MyProblemsComponent } from './my-problems/my-problems.component';
import { MyProblemsRoutingModule } from './my-problems-routing.module';


@NgModule({
  declarations: [
    UpperSectionComponent,
    MyProblemsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyProblemsRoutingModule
  ]
})
export class MyProblemsModule { }
