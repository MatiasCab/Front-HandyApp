import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Skill } from 'src/app/core/models/Skill';
import { SkillService } from 'src/app/shared/services/skill.service';
import { SkillListComponent } from 'src/app/shared/components/skill-list/skill-list.component';

import { Problem } from 'src/app/core/models/Problem';
import { ProblemService } from 'src/app/problems/services/problem.service';


@Component({
  selector: 'app-add-edit-problem',
  templateUrl: './add-edit-problem.component.html',
  styleUrls: ['./add-edit-problem.component.scss']
})
export class AddEditProblemComponent {
  
  @ViewChild (SkillListComponent) skillListComponent!: SkillListComponent;
  @ViewChild ('skillListModal') skillListComponentModal!: SkillListComponent;

  constructor(
    private skillService: SkillService,
    private problemService: ProblemService,
    private route: ActivatedRoute
  ){
  }
  
  problem?: Problem
  idSkillsProblem: number[] = []
  idSkillsModal: number[] = [];
  idSkillsTempList: number[] = [];
  idSkillsAux: number[] = [];

  counterOfChars:number = 0
  
  dateString?: string

  ngOnInit(){
    this.dateString = this.formatDateToString();
    this.skillService.getSkills().subscribe((skills: Skill[]) => {
      skills.forEach((skill: Skill) => {
        this.idSkillsModal.push(skill.id);
      })
    });
    this.getProblem();
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.problem?.skills?.forEach(x => {
      if(this.idSkillsModal.includes(x)){
        this.skillListComponentModal.tagComponent.forEach(tag => {
          if(tag.skill?.id === x){
            tag.activateSkill()
          }
        })
      }
      })
    })
  }

  formatDateToString(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    
    return `${day} de ${month} de ${year}`;
  }

  countCharacters(event: any){
    this.counterOfChars = event.length;
  }

  addSkillToTempList(ids: number[]) {
    this.idSkillsAux = ids;
  }

  skillsToList(){
    const skillTemp: number[] = []
    this.skillListComponentModal.tagComponent.forEach(tag => {
      if(tag.isSpanSelected){
        if(tag.skill)
        skillTemp.push(tag.skill?.id);
      }
    })
    this.skillListComponent.refreshList(skillTemp);
  }

  getRouteId(routeId: string): string | undefined{
    const id = this.route.snapshot.paramMap.get(routeId);
    if(id){
      return id;
    }else{
      return undefined;
    }
  }

  getProblem(): void {
    const id = this.getRouteId('problemId');
    if (id) {
      const idNumber: number = parseInt(id);
      this.problemService.getProblemById(idNumber).subscribe(problem => {
        if (problem == undefined) {
          console.error('Error 404: PROBLEM NOT FOUND');
          return;
        } else {
          this.problem = problem;
          this.idSkillsProblem = []; 
          this.problem.skills?.forEach(skillId => {
            this.skillService.getSkillById(skillId).subscribe(x => {
              if (x == undefined) {
                console.error("Error 404: SKILL NOT FOUND");
                return;
              }
              this.idSkillsProblem.push(x.id!);
            });
          });
        }
      });
    }

  }


  
}
