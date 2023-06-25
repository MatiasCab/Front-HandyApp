import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upper-section',
  templateUrl: './upper-section.component.html',
  styleUrls: ['./upper-section.component.scss']
})
export class UpperSectionComponent {
  @Input() pendingQuantity?: number;
  @Input() resolvedQuantity?: number;

  @Output() 

  filterBy(number: number){
  }


}
