import { Component, Input } from '@angular/core';
import { User } from 'src/app/problems/models/User';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input() User: User | undefined;

  @Input() MyProfile: Boolean | false = false;
  title: String = "Habilidades";

  constructor(
  ) {}

  ngOnInit(): void {
      if (this.MyProfile == true) {
        this.title = "Mis Habilidades";
      }else{
        this.title = "Habilidades";
      }
    };
  
}
