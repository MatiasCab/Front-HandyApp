import { Component, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { Skill } from '../../models/Skill';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Output() sendIdToDelete = new EventEmitter<number>
  @Output() sendIdToFilter = new EventEmitter<number>

  @Input() skill?: Skill;
  @Input() option?: string;

  constructor(
    private cd: ChangeDetectorRef
  ) {}

  deleteSkill() {
    this.isSpanSelected = false;
    this.sendIdToDelete.emit(this.skill!.id);
  }

  isSpanSelected = false;

  addToFilter() {
    this.isSpanSelected = !this.isSpanSelected;
    this.sendIdToFilter.emit(this.skill!.id);

  }

}
