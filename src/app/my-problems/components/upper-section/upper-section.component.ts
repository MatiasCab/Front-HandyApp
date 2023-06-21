import { Component } from '@angular/core';


@Component({
  selector: 'app-upper-section',
  templateUrl: './upper-section.component.html',
  styleUrls: ['./upper-section.component.scss']
})
export class UpperSectionComponent {
  pendingQuantity?: number;
  resolvedQuantity?: number;

  filterBy(number: number){
    if(number == 1){

    }
    else if(number == 2){
  
    }
    
    else{

    }
  }


}
