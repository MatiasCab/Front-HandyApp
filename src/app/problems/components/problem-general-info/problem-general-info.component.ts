import { Component, Input } from '@angular/core';
import { Problem } from '../../../core/models/Problem';

@Component({
  selector: 'app-problem-general-info',
  templateUrl: './problem-general-info.component.html',
  styleUrls: ['./problem-general-info.component.scss']
})
export class ProblemGeneralInfoComponent {

  @Input() problem?: Problem;

  problemSkillsIds: number[] =[]

  ngOnInit(){
    this.problem?.skills?.forEach(skill => {
      this.problemSkillsIds.push(skill.id);
    })
  }
}
