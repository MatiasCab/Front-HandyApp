import { Component } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../models/Problem';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-problem-view-page',
  templateUrl: './problem-view-page.component.html',
  styleUrls: ['./problem-view-page.component.scss']
})
export class ProblemViewPageComponent {

  problem?: Problem;
  id?: number;
  viewOption?: string; //['otherView', 'myView', 'myCompleteView']

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.problemService.getProblems().subscribe(problems => {
      this.problem = problems[0];
    });
    this.route.params.subscribe(params => {
      this.id = params['problemId']; // 'id' es el nombre del parámetro definido en tu archivo de enrutamiento
      if(this.id == 1) {
        this.viewOption = 'otherView';
      } else if (this.id == 2) {
        this.viewOption = 'myView';
      } else {
        this.viewOption = 'myCompleteView';
      }
    });
  }
    

}
