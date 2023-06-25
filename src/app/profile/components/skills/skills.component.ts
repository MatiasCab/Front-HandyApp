import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Skill } from 'src/app/core/models/Skill';
import { User } from 'src/app/core/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { SkillListComponent } from 'src/app/shared/components/skill-list/skill-list.component';
import { SkillService } from 'src/app/shared/services/skill.service';
import { ProfileService } from '../../services/profile.service';

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
  @ViewChild ('skillListModal') skillListComponentModal!: SkillListComponent;

  constructor(
    private skillService: SkillService,
    private userService: UserService,
    private profileService: ProfileService,
    private Router: Router
  ) {}

  ngOnInit(): void {
      if (this.MyProfile == true) {
        this.title = "Mis Habilidades";
      }else{
        this.title = "Habilidades";
      }

      this.User?.skills?.forEach(skill => this.userSkills.push(skill.id))

      this.skillService.getSkills().subscribe(skills => {
          let skillsAux: Skill[] = skills["skills"];
          skillsAux.forEach((skill: Skill) => {
          this.skills.push(skill.id);
        })
      });
    };
  
  addSkillToFilterTempList(ids: number[]) {
    this.skillsList = ids;
  }
  
  changeSkills(){
    let body = {
        description: this.User?.description,
        skills : this.skillsList,
        lat: this.User?.lat,
        lng: this.User?.lng,
    }
    this.profileService.updateProfile(body).subscribe(profile => {
      this.reload();
    });
  }

  reload(): void {
    const currentUrl = this.Router.url;
    this.Router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.Router.navigate([currentUrl]);
    });
  }
}
