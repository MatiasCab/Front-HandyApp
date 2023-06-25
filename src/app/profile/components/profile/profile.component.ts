import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/User';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../../services/reviews.service';

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
    private reviewsservice : ReviewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      if(this.username === undefined) {
        // acceder al local 
        var id = localStorage.getItem('user_ID');
        this.reviewsservice.getProfile(id!).subscribe(profile => {
          this.User = profile["user"];
          this.MyProfile = true;
      });
      } else {
        this.reviewsservice.getProfile(this.username).subscribe(profile => {
          this.User = profile["user"];
          this.MyProfile = false;
        });
      }
    });
  }
}
