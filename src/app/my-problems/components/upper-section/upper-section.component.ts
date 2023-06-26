import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upper-section',
  templateUrl: './upper-section.component.html',
  styleUrls: ['./upper-section.component.scss']
})
export class UpperSectionComponent {

  @Output() filterEmitter = new EventEmitter<number|string>();

  filterBy(filterOption: number|string){
      this.filterEmitter.emit(filterOption);
  }


}
