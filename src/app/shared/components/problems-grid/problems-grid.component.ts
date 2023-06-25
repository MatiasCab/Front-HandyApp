import { Component, Input, OnInit } from '@angular/core';

import { Problem } from 'src/app/core/models/Problem';
import { ProblemService } from 'src/app/problems/services/problem.service'; //Tiene sentido la ruta?

@Component({
  selector: 'app-problems-grid',
  templateUrl: './problems-grid.component.html',
  styleUrls: ['./problems-grid.component.scss']
})
export class ProblemsGridComponent {

  @Input() problems?: Problem[]; //Tiene sentido que sea INPUT?
  problems2:Problem[] = [];
  @Input() option: string = '';

  constructor(
    private problemService: ProblemService,
    ) { }

  ngOnInit(): void {
    if(!this.option){
    this.getProblems();
    }
  }

  getProblems(){
    this.problemService.getProblems().subscribe(problems => {
      if(problems.error){
        console.log('Error???')
      }
      else{
        this.problems=problems['problems'];
        console.log(this.problems);
      }
    })
  }

  

}