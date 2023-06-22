import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  username?: string;
  User?: User;
  MyProfile: Boolean|false = true;
  //id?: number;
  //viewOption?: string; //['otherView', 'myView', 'myCompleteView']

  constructor(
    private userService : UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      if(this.username === undefined) {
        this.userService.getMyProfile().subscribe(profile => {
          this.User = profile;
        });
        this.MyProfile = true;
      } else {
        this.userService.getProfile(this.username!).subscribe(profile => {
          this.User = profile;
        });
        this.MyProfile = false;
      }
    });
  }
}
