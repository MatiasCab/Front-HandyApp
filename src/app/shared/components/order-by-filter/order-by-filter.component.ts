import { Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-order-by-filter',
  templateUrl: './order-by-filter.component.html',
  styleUrls: ['./order-by-filter.component.scss']
})
export class OrderByFilterComponent {

  @ViewChild ('seeFriendsTag') seeFriendsTag!: TagComponent;
  @ViewChild ('seeAllTag') seeAllTag!: TagComponent;

  @ViewChild ('seeResolvedTag') seeResolvedTag!: TagComponent;
  @ViewChild ('seeAllTag2') seeAllTag2!: TagComponent;
  @ViewChild ('seePendingTag') seePendingTag!: TagComponent;

  @Output() filterEmitter = new EventEmitter<string | number>();
  @Output() orderEmitter = new EventEmitter<string | number>();

  @Input() option: string = ''
  @Input() resolvedNumber?: number;
  @Input() pendingNumber?: number;

  filterByFriends(text:string){
    if(text === 'Todos'){
      this.seeAllTag.isSpanSelectedFilter = true;
      this.seeFriendsTag.isSpanSelectedFilter = false;
    }
    else if (text === 'Amigos'){
      this.seeFriendsTag.isSpanSelectedFilter = true;
      this.seeAllTag.isSpanSelectedFilter = false;
    }
    this.filterEmitter.emit(text);
  }

  filterByStatus(option :number){
    if(option === 1){
      this.seeResolvedTag.isSpanSelectedFilter = false;
      this.seePendingTag.isSpanSelectedFilter = false;
      this.seeAllTag2.isSpanSelectedFilter = true;
    }
    else if (option === 2){
      this.seeAllTag2.isSpanSelectedFilter = false;
      this.seeResolvedTag.isSpanSelectedFilter = false;
      this.seePendingTag.isSpanSelectedFilter = true;
    }
    else if (option === 3){
      this.seeAllTag2.isSpanSelectedFilter = false;
      this.seeResolvedTag.isSpanSelectedFilter = true;
      this.seePendingTag.isSpanSelectedFilter = false;
    }
    this.filterEmitter.emit(option);
  }

  orderByDistance(type:string){
    this.orderEmitter.emit(type);
  }

}
