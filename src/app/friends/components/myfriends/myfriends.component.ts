import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.scss']
})
export class MyfriendsComponent {

  friends?: User[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(){
    this.userService.getMyFriends().subscribe(friend => {
      this.friends = friend;
    });
  }

  searchFriends(event : any){
    var name = event["name"];
    var skills = event["skills"];
    console.log("name =", name, "skills =", skills);
    this.userService.filterMyFriends(name, skills).subscribe(friend => {
      this.friends = friend
    });
  }
}
