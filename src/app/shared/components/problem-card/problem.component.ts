import { Component, Input} from '@angular/core';
import { Problem } from '../../../core/models/Problem';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent {

  @Input() problem?: Problem;
  @Input() fullInfo?: boolean;

  problemSkillsIds: number[] = [];
  dateString?: string;

  constructor() { }

  ngOnInit(): void {
    if (this.problem) {
      let date: Date = new Date(this.problem.postedDate!);
      this.dateString = dateToString(date);
      this.problem.skills?.forEach(skill => {
        this.problemSkillsIds.push(skill.id)
      })
    }
  }
}


function dateToString(date: Date): string {
  const today: Date = new Date();
  const diference: number = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diference === 0) {
    return 'Hoy';
  } 
  if (diference === 1) {
    return 'Ayer';
  }
  if (diference < 6) {
    return `Hace ${diference} día${diference !== 1 ? 's' : ''}`;
  } else if (diference < 22) {
    const weeks: number = Math.floor(diference / 7);
    return `Hace ${weeks} semana${weeks !== 1 ? 's' : ''}`;
  } else if (diference < 365) {
    const months: number = Math.floor(diference / 30);
    return `Hace ${months} mes${months !== 1 ? 'es' : ''}`;
  } else {
    const years: number = Math.floor(diference / 365);
    return `Hace ${years} año${years !== 1 ? 's' : ''}`;
  }
}
