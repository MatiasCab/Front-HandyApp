import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsSearchComponent } from './components/problems-search/problems-search.component';
import { ProblemsRoutingModule } from './problems-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProblemsSearchComponent,
    
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    SharedModule
  ],
})
export class ProblemsModule { }
