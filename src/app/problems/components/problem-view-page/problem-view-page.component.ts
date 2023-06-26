import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../../core/models/Problem';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from 'src/app/profile/services/reviews.service';
import { User } from 'src/app/core/models/User';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-problem-view-page',
  templateUrl: './problem-view-page.component.html',
  styleUrls: ['./problem-view-page.component.scss']
})
export class ProblemViewPageComponent {

  problem?: Problem;
  id?: number;
  problemID?: string;
  viewOption?: string; //['otherView', 'myView', 'myCompleteView']
  contactLabel?: string;
  importantUserInfo?: User;
  rating?: number;
  happySel : boolean = false;
  midSel : boolean = false;
  sadSel : boolean = false;
  stringCalificacion : string = "Por favor califica tu experiencia";
  canRate : boolean = false;
  userOwner?: User;

  @ViewChild('newusername') username?: ElementRef<HTMLInputElement>;
  @ViewChild('newdescription') description?: ElementRef<HTMLInputElement>;

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute,
    private router: Router,
    private ReviewsService: ReviewsService,
    private profileService : ProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const problemId = params['problemId'];
      this.problemService.getProblemById(problemId).subscribe(problem => {
        if(problem.error){
          
        }
        else{
          this.problem = problem['problem'];
          this.id = problemId;
          this.problemID = this.problem!.id!.toString();
          let owner = this.problem!.ownerUser;
          //ID PARA LA CARD
          var ownerID = owner!.id!.toString();
          this.profileService.getProfile(ownerID).subscribe(profile => {
            this.userOwner = profile["user"];
          });
          this.contactLabel = `Contactar a ${owner?.firstname}`;
          let actualUserId = localStorage.getItem('user_ID'); // 'id' es el nombre del parámetro definido en tu archivo de enrutamiento
          if(ownerID != actualUserId) {
            if(this.isResolved()){
              this.viewOption = 'myCompleteView';
            } else {
              this.viewOption = 'otherView';
              this.importantUserInfo = owner;
            }
          } else {
            if(this.problem?.resolvedDate){
              this.viewOption = 'myCompleteView';
            }else {
              this.viewOption = 'myView';
            }
          }
        }
      });
    });
  }

  private isResolved(){
    if(this.problem?.resolvedDate) return true;
    return false;
  }
  
  public chatsRedirect(){
    this.router.navigateByUrl('/chats/myproblems');
  }

  public edit(){
    this.router.navigateByUrl('/my-problems/edit-problem/id');
  }

  happy(){
    this.rating = 3;
    this.happySel = true;
    this.midSel = false;
    this.sadSel = false;
    this.stringCalificacion = "¡Gracias por calificar tu experiencia!";
    this.canRate = true;
  }

  mid(){
    this.rating = 2;
    this.happySel = false;
    this.midSel = true;
    this.sadSel = false;
    this.stringCalificacion = "¡Gracias por calificar tu experiencia!";
    this.canRate = true;
  }

  sad(){
    this.rating = 1;
    this.happySel = false;
    this.midSel = false;
    this.sadSel = true;
    this.stringCalificacion = "¡Gracias por calificar tu experiencia!";
    this.canRate = true;
  }

  check(){
    let desc = this.description?.nativeElement.value;
    let username = this.username?.nativeElement.value;
    if (this.canRate == true && desc != "" && username != "") {
      (document.getElementById('btnEnviar') as HTMLButtonElement).disabled = false;
    }else{
      (document.getElementById('btnEnviar') as HTMLButtonElement).disabled = true;
    }
  }

  sendReview(){
    let desc = this.description?.nativeElement.value;
    let username = this.username?.nativeElement.value;
    if (this.happySel){
      this.rating = 3;
    }else if (this.midSel){
      this.rating = 2;
    }else if (this.sadSel){
      this.rating = 1;
    }
    let body = {
      description: desc,
      score: this.rating,
      problemId:  this.problem?.id,
      solverUsername: username
    }
    this.ReviewsService.createReview(body).subscribe(res => {
      //recarga la pagina
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
    });
  }

  editProblem(){
    this.router.navigateByUrl(`/my-problems/edit-problem/${this.problemID}`);
  }
}
