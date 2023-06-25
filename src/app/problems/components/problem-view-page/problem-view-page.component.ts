import { Component } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../../core/models/Problem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-view-page',
  templateUrl: './problem-view-page.component.html',
  styleUrls: ['./problem-view-page.component.scss']
})
export class ProblemViewPageComponent {

  problem?: Problem;
  id?: number;
  viewOption?: string; //['otherView', 'myView', 'myCompleteView']
  contactLabel?: string;

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const problemId = params['problemId'];
      this.problemService.getProblemById(problemId).subscribe(problem => {
        if(problem.error){
          
        }
        else{
          console.log(problem);
          this.problem = problem['problem'];
          this.id = problemId;
          let owner = this.problem!.ownerUser;
          let ownerId = owner?.id?.toString();
          this.contactLabel = `Contactar a ${owner?.firstname}`;
          let actualUserId = localStorage.getItem('user_ID'); // 'id' es el nombre del parámetro definido en tu archivo de enrutamiento
          if(ownerId != actualUserId) {
            if(this.isResolved()){
              this.viewOption = '';
            }else {
              this.viewOption = 'otherView';
            }
          } else {
            if(this.problem?.resolvedDate){
              this.viewOption = '';
            }else {
              this.viewOption = 'otherView';
            }
          this.viewOption = 'myView';
          }
        }
      });
    });
  }

  private isResolved(){
    if(this.problem?.resolvedDate) return true;
    return false;
  }
    

}
