import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  @ViewChild ('problemDescriptionText') problemDescriptionText!:  ElementRef<HTMLTextAreaElement>;
  @ViewChild ('problemTitleText') problemTitleText!: ElementRef<HTMLInputElement>;
  @ViewChild (MapComponent) mapComponent!: MapComponent;
  @ViewChild ('m') m!: any;
  @ViewChild ('s') sk!: SkillListComponent;

  constructor(
    private skillService: SkillService,
    private problemService: ProblemService,
    private route: ActivatedRoute,
    private router: Router
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

  postProblem() {
    let auxSkills: number[] = this.sk.skills;
    if(this.validateInput(this.problemDescriptionText.nativeElement.value) && this.validateInput(this.problemTitleText.nativeElement.value) && auxSkills.length != 0 && this.newProblemPicture) {
      let newProblem: any = {
        name: this.problemTitleText.nativeElement.value,
        description: this.problemDescriptionText.nativeElement.value,
        skills: auxSkills,
        lat: this.m.markerLat,
        lng: this.m.markerLng,
        image: this.cleanBase64(this.newProblemPicture)
      }
      this.problemService.postProblem(newProblem).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/my-problems');
      });
    } else {
      alert("Debe ingresar un titulo, descripcion, y habilidades basicas.");
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
    let auxSkills: number[] = [];
    this.skillListComponentModal.tagComponent.forEach(i => {
      if(i.isSpanSelectedFilter){
        auxSkills.push(i.skill!.id);
      }
    });
    if(auxSkills.length == 0){
      auxSkills = this.sk.skills;
    }
    console.log(auxSkills);
    console.log(this.validateInput(this.problemDescriptionText.nativeElement.value));
    if(this.validateInput(this.problemDescriptionText.nativeElement.value) && this.validateInput(this.problemTitleText.nativeElement.value) && auxSkills.length != 0) {
      let newProblem: any = {
        id: this.problem?.id,
        name: this.problemTitleText.nativeElement.value,
        description: this.problemDescriptionText.nativeElement.value,
        skills: auxSkills,
        lat: this.m.markerLat,
        lng: this.m.markerLng
      }
      if(this.newProblemPicture) {
        newProblem.image = this.cleanBase64(this.newProblemPicture);
      }
      this.problemService.putProblem(newProblem).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/my-problems');
      });
    } else {
      alert("Debe ingresar un titulo, descripcion, y habilidades basicas.");
    }
  }

  cleanBase64(img:string): string {
    const index = img.indexOf(",");
    if (index !== -1) {
      return img.slice(index + 1);
    } else {
      return img;
    }
  }

  validateInput(input: string): boolean {
    if(!input) return false;
    if (input.trim() === '') {
      return false;
    }
    // const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    // if (specialChars.test(input)) {
    //   return false;
    // }
    console.log("QUE TAL", input);
    return true;
  }
  

  
}
