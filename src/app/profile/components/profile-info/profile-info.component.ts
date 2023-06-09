import { Component, Input } from '@angular/core';
import { User } from 'src/app/problems/models/User';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {

  @Input() User?: User;
}
