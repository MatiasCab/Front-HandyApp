import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/core/models/Skill';
import { SkillService } from 'src/app/shared/services/skill.service';
import { SkillListComponent } from 'src/app/shared/components/skill-list/skill-list.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.scss']
})
export class SearchFriendsComponent {

  skills:  number[] = [];
  skillsList: number[] = [];
  skillsFilter: number[] = [];
  valorInput: string = '';

  @Output() friendSender = new EventEmitter<{name: string, skills:number[]}>();

  @ViewChild ('skillsList') skillListFilter!: SkillListComponent;
  @ViewChild ('skillsModal') skillListModal!: SkillListComponent;
  
  constructor(
    private skillService: SkillService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe((skills: Skill[]) => {
      skills.forEach((skill: Skill) => {
        this.skills.push(skill.id);
      })
    });
  }

  /*
  addSkillToFilterTempList(ids: number[]) {
    this.skillsList = ids;
  }

  skillsToFilter(){
    this.skillService.getSkills().subscribe((skills: Skill[]) => {
      this.skillsFilter = skills.filter(skill => this.skillsList.includes(skill.id)).map(skill => skill.id);
      this.skillListComponent.refreshList(this.skillsFilter);

    })
  }
*/

  deleteSkill(id: number){
    this.skillListModal.tagComponent.forEach(x =>{
      if(x.skill?.id === id){
        x.deactivateSkill();
      }
    })
    this.skillsList.forEach((skill, index) => {
      if(skill === id) this.skillsList.splice(index, 1);
    });
  }

  addSkillToFilterTempList(ids: number[]) {
    this.skillsList = ids;
  }

  skillsToFilter(){
    const skillTemp: number[] = []
    this.skillListModal.tagComponent.forEach(tag => {
      if(tag.isSpanSelected){
        if(tag.skill)
        skillTemp.push(tag.skill?.id);
      }
    })
    this.skillListFilter.refreshList(skillTemp);
  }

  searchFriends(name: string){
    this.friendSender.emit({name: name, skills: this.skillsList});
  }

}
