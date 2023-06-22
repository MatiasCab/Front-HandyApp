import { Component, Input } from '@angular/core';
import { Problem } from '../../../core/models/Problem';
import { User } from 'src/app/core/models/User';

import { Router } from '@angular/router';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.scss']
})
export class LongCardComponent {

  constructor(
    private router: Router
  ){}

  @Input() problem?: Problem
  @Input() userId?: number;
  @Input() option?: string;

  editProblem(){
    const link = `/my-problems/edit-problem/${this.problem?.id}`;
    this.router.navigateByUrl(link);
  }

}
