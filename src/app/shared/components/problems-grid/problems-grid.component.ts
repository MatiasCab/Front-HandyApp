import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  problems2:Problem[] = [];
  @Input() option: string = '';
  @Output() problemsEmmiter = new EventEmitter <boolean>

  skills?: string
  name?: string
  filter? : string

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
        this.problems=problems['problems'];
        console.log(this.problems);
        this.problemsEmmiter.emit(true)
      }
    })
  }

  getMyProblems(){
    this.problemService.getMyProblems().subscribe(problems => {
      if(problems.error){

      }
      else{
        this.problems = problems['problems'];
        this.problemsEmmiter.emit(true);
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
    if(this.filter === 'Amigos'){
      console.log(this.filter);
      let friendshipStatus = '?'
      if(!name && !skills){ 
          friendshipStatus = '?creator=friends'
        this.problemService.getProblemsFilteredFriends(friendshipStatus, '', '').subscribe(problems => {
          this.problems = problems['problems']
          this.name = name
          this.skills = skills;
          console.log(`${friendshipStatus}${name}${skills}`)
        })
      }
      else if(name && !skills){
        friendshipStatus = '?creator=friends&'
        this.problemService.getProblemsFilteredFriends(friendshipStatus, name).subscribe(problems => {
          this.problems = problems['problems']
          this.name = name
          this.skills = skills;
          console.log(`${friendshipStatus}${name}${skills}`)
        })
      }
      else if(!name && skills){
        friendshipStatus = '?creator=friends'
        this.problemService.getProblemsFilteredFriends(friendshipStatus, '', skills).subscribe(problems => {
          this.problems = problems['problems']
          this.name = name
          this.skills = skills;
          console.log(`${friendshipStatus}${name}${skills}`)
        })
      }
      else if(name && skills){
        friendshipStatus = '?creator=friends&'
        this.problemService.getProblemsFilteredFriends(friendshipStatus, name, skills).subscribe(problems => {
          this.problems = problems['problems']
          this.name = name
          this.skills = skills;
          console.log(`${friendshipStatus}${name}${skills}`)
        })
      }
    }
    else{
    this.problemService.getProblemsFiltered(name, skills).subscribe(problems => {
      this.problems = problems["problems"]
      this.name = name
      this.skills = skills;
    });
  }
    
  }

  filterProblems(event: any){
    this.filter = event;
    let friendshipStatus: string = '?'
    if(!this.name && !this.skills){
      if(event === 'Amigos'){
        friendshipStatus = '?creator=friends'
      }
      this.problemService.getProblemsFilteredFriends(friendshipStatus, '', '').subscribe(problems => {
        this.problems = problems["problems"];
      })
    }
    else if(this.name && !this.skills){
      if(event === 'Amigos'){
      friendshipStatus = '?creator=friends&'
      }
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
  

}