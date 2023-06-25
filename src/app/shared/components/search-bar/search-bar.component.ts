import { Component, ViewChild, Output, EventEmitter} from '@angular/core';


import { Skill } from '../../../core/models/Skill';
import { SkillService} from '../../services/skill.service';

import { SkillListComponent } from '../skill-list/skill-list.component';

import { Problem } from 'src/app/core/models/Problem';
import { ProblemService } from 'src/app/problems/services/problem.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  skills:  number[] = [];
  skillsList: number[] = [];
  skillsFilter: number[] = [];

  @Output() problemSender = new EventEmitter();


  valorInput: string = '';

  @ViewChild ('skillsList') skillListFilter!: SkillListComponent;
  @ViewChild ('skillsModal') skillListModal!: SkillListComponent;


  constructor(
    private skillService: SkillService,
    private problemService: ProblemService
  ) { }
  
  ngOnInit() {
    this.skillService.getSkills().subscribe((skills: Skill[]) => {
      skills.forEach((skill: Skill) => {
        this.skills.push(skill.id);
      })
    });
  }

  deleteSkill(id: number){
    this.skillListModal.tagComponent.forEach(x =>{
      if(x.skill?.id === id){
        x.deactivateSkill();
      }
    })
  }

  addSkillToFilterTempList(ids: number[]) {
    this.skillsList = ids;
  }

  skillsToFilter(){
    const skillTemp: number[] = []
    this.skillListModal.tagComponent.forEach(tag => {
      if(tag.isSpanSelected){
        if(tag.skill)
        skillTemp.push(tag.skill?.id);
      }
    })
    this.skillListFilter.refreshList(skillTemp);
  }

  searchProblem(name: string, skills: number[]){
    let problemsFiltered: Problem[] = [];
    this.problemService.getProblems().subscribe(problems => {
      problems.forEach((problemX: Problem) => {
        if(problemX && problemX.name!.toLowerCase().includes(name.toLowerCase())){
          problemsFiltered.push(problemX);
        }
      })
      this.problemService.sendProblems(problemsFiltered);
      console.log(this.skillListFilter.tagComponent);
      this.problemSender.emit();
    })
  }

  }

