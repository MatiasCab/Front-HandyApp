import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {

  @Input() User?: User;
  joinedDateString: string = "a";

  convertDateToString(date: Date): string {
    const months: string[] = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();
  
    return `Miembro desde ${month} ${year}`;
  }

  ngOnInit(): void { 
    var datee = new Date(this.User?.singupDate!);
    console.log(datee);
    this.joinedDateString = this.convertDateToString(datee);
  }
}
