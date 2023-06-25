import { Component, Input, ViewChild } from '@angular/core';
import { Skill } from 'src/app/core/models/Skill';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { SkillListComponent } from 'src/app/shared/components/skill-list/skill-list.component';
import { SkillService } from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input() User: User | undefined;

  userSkills: number[] = [];
  skills:  number[] = [];
  skillsList: number[] = [];
  skillsFilter: number[] = [];

  @Input() MyProfile: Boolean | false = false;
  title: String = "Habilidades";
  @ViewChild (SkillListComponent) skillListComponent!: SkillListComponent;

  constructor(
    private skillService: SkillService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
      if (this.MyProfile == true) {
        this.title = "Mis Habilidades";
      }else{
        this.title = "Habilidades";
      }

      this.User?.skills?.forEach(skill => this.userSkills.push(skill.id))

      this.skillService.getSkills().subscribe((skills: Skill[]) => {
        skills.forEach((skill: Skill) => {
          this.skills.push(skill.id);
        })
      });
    };
  
  addSkillToFilterTempList(ids: number[]) {
    this.skillsList = ids;
  }
  
  changeSkills(){
    this.userService.updateUserSkills(this.skillsList).subscribe();
  }
  /*
  skillsToFilter(){
    this.skillService.getSkills().subscribe((skills: Skill[]) => {
      this.skillsFilter = skills.filter(skill => this.skillsList.includes(skill.id)).map(skill => skill.id);
      this.skillListComponent.refreshList(this.skillsFilter);
    })
  }
  */
}
