import { Component, Input, OnInit } from '@angular/core';

import { Problem } from 'src/app/problems/models/Problem';
import { ProblemService } from 'src/app/problems/services/problem.service'; //Tiene sentido la ruta?

@Component({
  selector: 'app-problems-grid',
  templateUrl: './problems-grid.component.html',
  styleUrls: ['./problems-grid.component.scss']
})
export class ProblemsGridComponent {

  @Input() problems?: Problem[]; //Tiene sentido que sea INPUT?
  @Input() option: string = '';

  constructor(
    private problemService: ProblemService,
    ) { }

  ngOnInit(): void {
    this.problemService.getProblems().subscribe(problems => {
      this.problems = problems;
    });
  }

  refreshList(){
    this.problemService.problems$.subscribe(problemsX => {
      this.problems = problemsX})
  }

}