import { Component, Input } from '@angular/core';
import { User } from 'src/app/problems/models/User';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss']
})
export class EditBtnComponent {

  @Input() User?: User;
}
