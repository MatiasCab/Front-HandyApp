import { Component } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.scss']
})
export class AddfriendsComponent {

  people?: User[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(){
    this.userService.getNotFriends().subscribe(friend => {
      this.people = friend;
    });
  }

  searchNotFriends(event : any){
    var name = event["name"];
    var skills = event["skills"];
    console.log("name =", name, "skills =", skills);
    this.userService.filterNotMyFriends(name, skills).subscribe(people => {
      this.people = people
    });
  }
}
