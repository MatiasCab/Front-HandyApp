import { Component, ViewChild, Output, EventEmitter} from '@angular/core';

import { Skill } from 'src/app/core/models/Skill';
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

  @ViewChild (SkillListComponent) skillListComponent!: SkillListComponent;


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

  addSkillToFilterTempList(ids: number[]) {
    this.skillsList = ids;
  }

  skillsToFilter(){
    this.skillService.getSkills().subscribe((skills: Skill[]) => {
      this.skillsFilter = skills.filter(skill => this.skillsList.includes(skill.id)).map(skill => skill.id);
      this.skillListComponent.refreshList(this.skillsFilter);

    })
  }

  searchProblem(name: string, skills: number[]){
    let problemsFiltered: Problem[] = [];
    this.problemService.getProblems().subscribe(problems => {
      problems.forEach(problemX => {
        if(problemX && problemX.name!.toLowerCase().includes(name.toLowerCase())){
          problemsFiltered.push(problemX);
        }
      })
      this.problemService.sendProblems(problemsFiltered);
      this.problemSender.emit();
    })
  }

  }

