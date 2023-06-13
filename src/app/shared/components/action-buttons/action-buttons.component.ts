import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {

  @Input() solved?: string
  @Input() date?: Date
  iconClass: string = 'bi bi-pencil'

  dateToString(date: Date) {
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} de ${month} de ${year}`;
  }
  
  exampleDate = new Date();
  string = this.dateToString(this.exampleDate);

  changeIcon(isHover: boolean) {
    if (isHover) {
      this.iconClass = 'bi bi-pencil-fill';
    } else {
      this.iconClass = 'bi bi-pencil';
    }
  }

  deleteProblem() {
    throw new Error('Method not implemented.');
    }
    
}
