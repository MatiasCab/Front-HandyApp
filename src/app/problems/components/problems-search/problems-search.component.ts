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
  lastSearchInfo?: any;
  lastFilterInfo?: any;
  lastOrderFilter?: any;

  problemSearch(event: any) {
    this.problemsGridComponent.searchProblems2(event, this.lastFilterInfo, this.lastOrderFilter);
    this.lastSearchInfo = event;
  }

  problemFilter(event: any) {
    this.problemsGridComponent.filterProblems2(event, this.lastSearchInfo, this.lastOrderFilter);
    this.lastFilterInfo = event;
  }

  order(orderEmitter: any){
    let order = orderEmitter;
    if(this.lastOrderFilter) order = undefined;
    console.log(order);
    this.problemsGridComponent.filterProblems2(this.lastFilterInfo, this.lastSearchInfo, order);
    this.lastOrderFilter = order;
  }
  

  areProblems: boolean = false
  
}
