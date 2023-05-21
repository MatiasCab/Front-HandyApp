import { Component, Input, OnInit } from '@angular/core';
import { Problem } from '../../models/Problem';
import { ProblemService } from '../../services/problem.service';

@Component({
  selector: 'app-problems-grid',
  templateUrl: './problems-grid.component.html',
  styleUrls: ['./problems-grid.component.scss']
})
export class ProblemsGridComponent {

  @Input() problems?: Problem[];

  constructor(private problemService: ProblemService) { }

  ngOnInit(): void {
    this.problemService.getProblems().subscribe(problems => this.problems = problems);
  }

}