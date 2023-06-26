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

  // searchProblems(event : any){
  //   var nameInput: string = event["name"].toLowerCase();
  //   var name = ""
  //   if (nameInput !== ""){
  //     name = "name="+nameInput;
  //   }
  //   var skillsList = event["skills"];
  //   var skillLenght = skillsList.length;
  //   var skills = "";
  //   if(skillLenght !== 0){
  //     for (let i = 0; i < skillsList.length; i++) {
  //       skills += "&skills[]="+skillsList[i];
  //     }
  //   }
  //   if(this.filter === 'Amigos'){
  //     console.log(this.filter);
  //     let friendshipStatus = '?'
  //     if(!name && !skills){ 
  //         friendshipStatus = '?creator=friends'
  //       this.problemService.getProblemsFilteredFriends(friendshipStatus, '', '').subscribe(problems => {
  //         this.problems = problems['problems']
  //         this.name = name
  //         this.skills = skills;
  //         console.log(`${friendshipStatus}${name}${skills}`)
  //       })
  //     }
  //     else if(name && !skills){
  //       friendshipStatus = '?creator=friends&'
  //       this.problemService.getProblemsFilteredFriends(friendshipStatus, name).subscribe(problems => {
  //         this.problems = problems['problems']
  //         this.name = name
  //         this.skills = skills;
  //         console.log(`${friendshipStatus}${name}${skills}`)
  //       })
  //     }
  //     else if(!name && skills){
  //       friendshipStatus = '?creator=friends'
  //       this.problemService.getProblemsFilteredFriends(friendshipStatus, '', skills).subscribe(problems => {
  //         this.problems = problems['problems']
  //         this.name = name
  //         this.skills = skills;
  //         console.log(`${friendshipStatus}${name}${skills}`)
  //       })
  //     }
  //     else if(name && skills){
  //       friendshipStatus = '?creator=friends&'
  //       this.problemService.getProblemsFilteredFriends(friendshipStatus, name, skills).subscribe(problems => {
  //         this.problems = problems['problems']
  //         this.name = name
  //         this.skills = skills;
  //         console.log(`${friendshipStatus}${name}${skills}`)
  //       })
  //     }
  //   }
  //   else{
  //   this.problemService.getProblemsFiltered(name, skills).subscribe(problems => {
  //     this.problems = problems["problems"]
  //     this.name = name
  //     this.skills = skills;
  //   });
  // }
    
  // }

  // filterProblems(event: any){
  //   this.filter = event;
  //   let friendshipStatus: string = '?'
  //   if(!this.name && !this.skills){
  //     if(event === 'Amigos'){
  //       friendshipStatus = '?creator=friends'
  //     }
  //     this.problemService.getProblemsFilteredFriends(friendshipStatus, '', '').subscribe(problems => {
  //       this.problems = problems["problems"];
  //     })
  //   }
  //   else if(this.name && !this.skills){
  //     if(event === 'Amigos'){
  //     friendshipStatus = '?creator=friends&'
  //     }
  //     this.problemService.getProblemsFilteredFriends(friendshipStatus, this.name).subscribe(problems => 
  //       this.problems = problems['problems'])
  //   }
  //   else if(!this.name && this.skills){
  //     if(event === 'Amigos'){
  //       friendshipStatus = '?creator=friends'
  //     }
  //     this.problemService.getProblemsFilteredFriends(friendshipStatus, '', this.skills).subscribe(problems => 
  //       this.problems = problems['problems'])
  //   }
  //   else if(this.name && this.skills){
  //     if(event === 'Amigos'){
  //       friendshipStatus = '?creator=friends&'
  //     }
  //     this.problemService.getProblemsFilteredFriends(friendshipStatus, this.name, this.skills).subscribe(problems => 
  //       this.problems = problems['problems'])
  //   }
  // }

  createFilters(event: any, searchInfo: any, order?: string){
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
    this.createFilters(event, searchInfo);

      this.problemService.getProblemsFilteredFriends(friendshipStatus, this.name).subscribe(problems => 
        this.problems = problems['problems'])
    }
    else if(!this.name && this.skills){
      if(event === 'Amigos'){
        friendshipStatus = '?creator=friends'
      }
      this.problemService.getProblemsFilteredFriends(friendshipStatus, '', this.skills).subscribe(problems => 
        this.problems = problems['problems'])
    }
    else if(this.name && this.skills){
      if(event === 'Amigos'){
        friendshipStatus = '?creator=friends&'
      }
      this.problemService.getProblemsFilteredFriends(friendshipStatus, this.name, this.skills).subscribe(problems => 
        this.problems = problems['problems'])
    }
  }

  filterProblemsByStatus(event: any){
    if(event === 1){
      
    }
    else if(event ===2){

    }
    else{}

  }

  searchProblems2(event : any, filterInfo: any, order?: any){
    console.log('esto otro', order);
    this.createFilters(filterInfo, event);
}


}