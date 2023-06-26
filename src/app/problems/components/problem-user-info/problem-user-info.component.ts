import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-problem-user-info',
  templateUrl: './problem-user-info.component.html',
  styleUrls: ['./problem-user-info.component.scss']
})
export class ProblemUserInfoComponent {
  @Input() User?: User;

  joinedDateString?: string = "";
  @ViewChild('datestr', { static: true }) joinedDate!: ElementRef;

  convertDateToString(date: Date): string {
    const months: string[] = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();
  
    return `Miembro desde ${month} ${year}`;
  }

  ngAfterViewInit(): void {
    var datee = new Date(this.User?.singupDate!);
    var newdatee = this.convertDateToString(datee);
    console.log("FECHA", newdatee);
    this.joinedDate.nativeElement.textContent = newdatee;
  }
}
