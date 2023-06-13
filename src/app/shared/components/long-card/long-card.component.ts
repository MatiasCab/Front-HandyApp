import { Component, Input } from '@angular/core';
import { Problem } from '../../../problems/models/Problem';
import { User } from 'src/app/problems/models/User';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.scss']
})
export class LongCardComponent {

  @Input() problem?: Problem
  @Input() userId?: number;
  @Input() option?: string;

}
