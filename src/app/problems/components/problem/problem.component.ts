import { Component, Input} from '@angular/core';
import { Problem } from '../../models/Problem';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent {

  @Input() problem?: Problem;
  @Input() option?: string;

  dateString?: string;

  constructor() { }

  ngOnInit(): void {
    if (this.problem) {
      this.dateString = this.problem.date!.toLocaleDateString();
    }
  }
}
