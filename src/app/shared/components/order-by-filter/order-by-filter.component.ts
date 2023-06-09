import { Component, ViewChild} from '@angular/core';

import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-order-by-filter',
  templateUrl: './order-by-filter.component.html',
  styleUrls: ['./order-by-filter.component.scss']
})
export class OrderByFilterComponent {

  @ViewChild ('seeFriendsTag') seeFriendsTag!: TagComponent;
  @ViewChild ('seeAllTag') seeAllTag!: TagComponent;


  filterBy(text:string){
    if(text === 'Todos'){
      this.seeAllTag.isSpanSelectedFilter = true;
      this.seeFriendsTag.isSpanSelectedFilter = false;
    }
    else if (text === 'Amigos'){
      this.seeFriendsTag.isSpanSelectedFilter = true;
      this.seeAllTag.isSpanSelectedFilter = false;
    }
  }

}
