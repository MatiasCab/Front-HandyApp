import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Problem } from 'src/app/core/models/Problem';
import { ProblemService } from 'src/app/problems/services/problem.service'; //Tiene sentido la ruta?

@Component({
  selector: 'app-problems-grid',
  templateUrl: './problems-grid.component.html',
  styleUrls: ['./problems-grid.component.scss']
})
export class  ProblemsGridComponent {

  @Input() problems?: Problem[]; //Tiene sentido que sea INPUT?
  problems2:Problem[] = [];
  @Input() option: string = '';
  @Output() problemsEmmiter = new EventEmitter <boolean>

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
        this.problemsEmmiter.emit(true)
      }
    })
  }

  searchProblems(event : any){
    var nameInput: string = event["name"].toLowerCase();
    var name = ""
    if (nameInput !== ""){
      name = "name="+nameInput;
    }
    var skillsList = event["skills"];
    var skillLenght = skillsList.length;
    var skills = "";
    if(skillLenght !== 0){
      for (let i = 0; i < skillsList.length; i++) {
        skills += "&skills[]="+skillsList[i];
      }
    }
    this.problemService.getProblemsFiltered(name, skills).subscribe(problems => {
      this.problems = problems["problems"]
    });
  }
  

}