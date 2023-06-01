import { Component, Input } from '@angular/core';
import { Problem } from '../../../problems/models/Problem';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.scss']
})
export class LongCardComponent {

  @Input() problem?: Problem

}
