import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent {

  @Input() skills: string[] = [];
  @Input() option?: string;

  constructor(
  private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  

}
