import { Component, ViewChild } from '@angular/core';

import { ProblemsGridComponent } from 'src/app/shared/components/problems-grid/problems-grid.component';

@Component({
  selector: 'app-problems-search',
  templateUrl: './problems-search.component.html',
  styleUrls: ['./problems-search.component.scss']
})
export class ProblemsSearchComponent {

  @ViewChild (ProblemsGridComponent) problemsGridComponent!: ProblemsGridComponent;


  sendProblemsToDisplay(){
    this.problemsGridComponent.refreshList();
  }
}
