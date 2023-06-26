import { Component, ViewChild } from '@angular/core';
import { Problem } from 'src/app/core/models/Problem';
import { ProblemService } from '../../services/problem.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-problems-by-user',
  templateUrl: './problems-by-user.component.html',
  styleUrls: ['./problems-by-user.component.scss']
})
export class ProblemsByUserComponent {

  problems : Problem[] = [];

  constructor(
    private problemService: ProblemService,
    private location: Location
  ) { }

  ngOnInit(){
    var url = this.location.path();
    var userid = url.replace(/^\/problems\/by-user\//, "");

    this.problemService.getProblemsByUser(userid).subscribe(problems => {
      this.problems = problems["problems"];
    });
  }
}
