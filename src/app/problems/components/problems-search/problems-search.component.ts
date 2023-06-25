import { Component, ViewChild } from '@angular/core';

import { ProblemsGridComponent } from 'src/app/shared/components/problems-grid/problems-grid.component';

@Component({
  selector: 'app-problems-search',
  templateUrl: './problems-search.component.html',
  styleUrls: ['./problems-search.component.scss']
})
export class ProblemsSearchComponent {

  @ViewChild (ProblemsGridComponent) problemsGridComponent!: ProblemsGridComponent;

  problemSearch(event: any){
    this.problemsGridComponent.searchProblems(event);
  }

  areProblems: boolean = false
  
}
