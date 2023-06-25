import { Component, ViewChild } from '@angular/core';

import { OrderByFilterComponent } from 'src/app/shared/components/order-by-filter/order-by-filter.component';
import { ProblemsGridComponent } from 'src/app/shared/components/problems-grid/problems-grid.component';

@Component({
  selector: 'app-problems-search',
  templateUrl: './problems-search.component.html',
  styleUrls: ['./problems-search.component.scss']
})
export class ProblemsSearchComponent {

  @ViewChild (ProblemsGridComponent) problemsGridComponent!: ProblemsGridComponent;
  @ViewChild (OrderByFilterComponent) orderByFilterComponent! :  OrderByFilterComponent;

  problemSearch(event: any){
    this.problemsGridComponent.searchProblems(event);
  }

  problemFilter(event: any){
    this.problemsGridComponent.filterProblems(event);
  }
  

  areProblems: boolean = false
  
}
