import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';

import { Problem } from 'src/app/core/models/Problem';
import { FriendsService } from 'src/app/friends/services/friends.service';
import { ProblemService } from 'src/app/problems/services/problem.service';


@Component({
  selector: 'app-problems-grid',
  templateUrl: './problems-grid.component.html',
  styleUrls: ['./problems-grid.component.scss']
})
export class  ProblemsGridComponent {

  problems?: Problem[];
  @Input() option: string = '';
  @Output() problemsEmmiter = new EventEmitter <boolean>

  skills?: string
  name?: string
  filter? : string

  showSpinner: boolean = true;
  noProblems: boolean = false;
  
  constructor(
    private problemService: ProblemService,
    ) { }

  ngOnInit(): void {
    if(!this.option){
    this.getProblems();
    }
    if(this.option){
      this.getMyProblems();
    }
  }

  getProblems(){
    this.noProblems = false;
    this.problemService.getProblems().subscribe(problems => {
      if(problems.error){
        console.log('Error???')
      }
      else{
        this.showSpinner = false;
        this.problems=problems['problems'];
        this.problemsEmmiter.emit(true)
        console.log(this.problems?.length);
        console.log(this.noProblems);
        if(this.problems?.length == 0){
          this.noProblems = true
        }
      }
    })
  }

  getMyProblems(){
    this.noProblems = false;
    this.problemService.getMyProblems().subscribe(problems => {
      if(problems.error){

      }
      else{
        this.showSpinner = false;
        this.problems = problems['problems'];
        this.problemsEmmiter.emit(true);
        if(this.problems?.length == 0){
          this.noProblems = true
        }
        console.log(problems);
      }
    })
  }


  createFilters(event: any, searchInfo: any, order?: string){
    this.noProblems = false;
    this.showSpinner = true;
    let filterType = event;
    var nameInput: string = searchInfo ? searchInfo["name"].toLowerCase() : "";
    var name = ""
    if (nameInput !== ""){
      name = "name="+nameInput;
    }
    console.log(event);
    console.log(searchInfo);
    var skillsList = searchInfo ? searchInfo.skills : [];
    var skillLenght = skillsList.length;
    var skills = "";
    if(skillLenght !== 0){
      for (let i = 0; i < skillsList.length; i++) {
        skills += "&skills[]="+skillsList[i];
      }
    }
    let filter = name + skills
    if(filterType == "Amigos") {
      filter += '&creator=friends'
    }
    if(order) {
      filter += '&order=nearby';
    }
    console.log("es el dos");
    if(this.filter === 'Amigos') filter = filter + '&creator=friends';
    this.problemService.getProblemsFiltered2(filter).subscribe(problems => {
      this.showSpinner = false;
      this.problems = problems['problems'];
      if(this.problems?.length == 0){
          this.noProblems = true;
      }

      console.log("epaaaa", this.problems);
    })
  }

  filterProblems2(event: any, searchInfo: any, order?: any){
    console.log(order);
    this.createFilters(event, searchInfo, order);
  }

  searchProblems2(event : any, filterInfo: any, order?: any){
    console.log('esto otro', order);
    this.createFilters(filterInfo, event, order);
  }

  filterMyProblems(option: number){
    var name = "status=";
    if (option == 3){
      name += "resolved";
    } else if(option == 2) {
      name += "pendent";
    }
    this.problemService.getMyProblems(name).subscribe(problems => {
      this.showSpinner = false;
      this.problems = problems['problems'];
      if(this.problems?.length == 0){
          this.noProblems = true;
      } else {
        this.noProblems = false;
      }
    })
  }


}