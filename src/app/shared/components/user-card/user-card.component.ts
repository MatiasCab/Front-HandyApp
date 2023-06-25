import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() userId?: number;
  user?: User;

  joinedDateString?: string;

  constructor(
    private userService: UserService
  ) { }

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
    this.userService.getUser(this.userId!).subscribe(user => {
      this.user = user;
      if (user) {
        var datee = new Date(user.singupDate!);
        this.joinedDateString = this.convertDateToString(datee);
      }
    });
  }

}
