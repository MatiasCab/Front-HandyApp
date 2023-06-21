import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Skill } from 'src/app/core/models/Skill';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Output() sendIdToDelete = new EventEmitter<number>
  @Output() sendIdToFilter = new EventEmitter<number>
  @Output() filterBy = new EventEmitter<string>

  @Input() skill?: Skill;
  @Input() option?: string;
  @Input() text?: string;

  constructor(
  ) {}

  deleteSkill() {
    this.isSpanSelected = false;
    this.sendIdToDelete.emit(this.skill!.id);
  }

  isSpanSelected = false;
  @Input() isSpanSelectedFilter = false;

  addSkillToFilter() {
    this.isSpanSelected = !this.isSpanSelected;
    this.sendIdToFilter.emit(this.skill!.id);
  }
  
  filter(){
    this.isSpanSelectedFilter = !this.isSpanSelectedFilter;
    this.filterBy.emit(this.text);
  }

}
