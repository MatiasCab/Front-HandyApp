import { Component, Input, Output, EventEmitter, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';

import { Skill } from '../../../core/models/Skill';
import { SkillService} from '../../services/skill.service';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent {

  @ViewChildren('tag') tagComponent!: QueryList<TagComponent>

  @Input() skills: number[]  = [];
  skillsFilter: number[] = [];
  skillsList: Skill[] = [];
  @Input() option?: string;
  @Output() sendIdsSkillsFilter = new EventEmitter<number[]>();
  @Output() sendId = new EventEmitter<number>();

  constructor(
    private skillService: SkillService,
    private cd: ChangeDetectorRef) 
  { }

  ngOnInit() {
    this.skillService.getSkills().subscribe(skills => {
      this.skillsList = skills.filter(skill => this.skills.includes(skill.id));
    })
  }

  refreshList(skillsIds : number[]){
    this.skillService.getSkills().subscribe(skills => {
      this.skillsList = skills.filter(skill => skillsIds.includes(skill.id));
      this.cd.detectChanges();
    });
  }

  addSkillToFilter(id: number) {
    if(this.skillsFilter.includes(id)) {
      this.skillsFilter = this.skillsFilter.filter(skill => skill !== id);
    } else {
      this.skillsFilter.push(id);
    }
    this.sendIdsSkillsFilter.emit(this.skillsFilter);
  }

  deleteSkill(id: number) {
    this.skills = this.skills.filter(skill => skill !== id);
    this.skillsList = this.skillsList.filter(skill => skill.id !== id);
    this.sendId.emit(id);
  }

  

}
