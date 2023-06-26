import { Component, ViewChild } from '@angular/core';

import { ProblemsGridComponent } from 'src/app/shared/components/problems-grid/problems-grid.component';

@Component({
  selector: 'app-my-problems',
  templateUrl: './my-problems.component.html',
  styleUrls: ['./my-problems.component.scss']
})
export class MyProblemsComponent {

  @ViewChild(ProblemsGridComponent) problemGrid!: ProblemsGridComponent


  filterSender(filterOption: any){
    this.problemGrid.filterMyProblems(filterOption);
  }


}
