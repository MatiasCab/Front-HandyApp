import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public problemsCollapsed = false;
  public profileCollapsed = true;
  public chatsCollapsed = true;
  public friendsCollapsed = true;
  public leftLine = ["", "", "", "", "", ""];

  constructor() { }

  public collapsedOptionClicked(position: number) {
    this.problemsCollapsed = true;
    this.leftLine = ["", "", "", "", "", ""];
    this.leftLine[position] = "left-line";
  }

  public focusedOption() {
    if (!this.profileCollapsed || !this.chatsCollapsed || !this.friendsCollapsed || this.leftLine.includes("left-line")) {
      this.leftLine = ["", "", "", "", "", ""];
      this.profileCollapsed = true;
      this.chatsCollapsed = true;
      this.friendsCollapsed = true;
      this.problemsCollapsed = !this.problemsCollapsed;
    }
  }
}
