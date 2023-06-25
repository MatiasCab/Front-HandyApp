import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Skill } from 'src/app/core/models/Skill';
import { SkillService } from 'src/app/shared/services/skill.service';
import { SkillListComponent } from 'src/app/shared/components/skill-list/skill-list.component';

import { Problem } from 'src/app/core/models/Problem';
import { ProblemService } from 'src/app/problems/services/problem.service';
import { MapComponent } from 'src/app/shared/components/map/map.component';


@Component({
  selector: 'app-add-edit-problem',
  templateUrl: './add-edit-problem.component.html',
  styleUrls: ['./add-edit-problem.component.scss']
})
export class AddEditProblemComponent {
  
  @ViewChild (SkillListComponent) skillListComponent!: SkillListComponent;
  @ViewChild ('skillListModal') skillListComponentModal!: SkillListComponent;
  @ViewChild ('problemDescriptionText') problemDescriptionText!: HTMLTextAreaElement;
  @ViewChild ('problemTitleText') problemTitleText!: HTMLInputElement;
  @ViewChild (MapComponent) mapComponent!: MapComponent;
  @ViewChild ('m') m!: any;

  constructor(
    private skillService: SkillService,
    private problemService: ProblemService,
    private route: ActivatedRoute
  ){
  }
  
  problem?: Problem
  idSkillsProblem?: number[];
  idSkillsModal: number[] = [];
  idSkillsTempList: number[] = [];
  idSkillsAux: number[] = [];

  counterOfChars:number = 0

  warningTitle?:string;
  warningDescription?: string;
  warningSkills?: string;
  warningPhoto?: string;
  
  newProblemPicture?: string
  
  dateString?: string

  ngOnInit(){
    this.dateString = this.formatDateToString();
    this.skillService.getSkills().subscribe((skills:any) => {
      console.log(skills)
      skills['skills'].forEach((skill: Skill) => {
        this.idSkillsModal.push(skill.id);
      })
    });
    this.getProblem();
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.problem?.skills?.forEach(x => {
      if(this.idSkillsModal.includes(x.id)){
        this.skillListComponentModal.tagComponent.forEach(tag => {
          if(tag.skill?.id === x.id){
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
    this.idSkillsProblem = skillTemp;
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

  pictureSaver(base64: string){
    this.newProblemPicture = base64;
  }

  postProblem(title: string, description: string){
    if(!this.validateInput(title) || !this.validateInput(description)){

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
          this.problem = problem['problem'];
          console.log(this.problem?.imageURL!);
          this.idSkillsProblem = []; 
          this.m.reload(this.problem?.lat, this.problem?.lng)
          console.log(this.problem!.skills);
          this.problem!.skills?.forEach(skill => {
            console.log(skill);
              this.idSkillsProblem?.push(skill.id!);
          })
        }
      })
    }
  }

  edit(){
    
  }

  validateInput(input: string): boolean {
    if (input.trim() === '') {
      return false;
    }

    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(input)) {
      return false;
    }
  
    return true;
  }
  

  
}
