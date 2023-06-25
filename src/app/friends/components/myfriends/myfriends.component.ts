import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/User';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.scss']
})
export class MyfriendsComponent {

  friends?: User[];
  constructor(
    private friendsService: FriendsService
  ) { }

  ngOnInit(){
    this.friendsService.getFriends().subscribe(friend => {
      this.friends = friend;
    });
  }

  searchFriends(event : any){
    var nameInput = event["name"];
    var name = ""
    if (nameInput !== ""){
      name = "&name="+nameInput;
    }
    var skillsList = event["skills"];
    var skillLenght = skillsList.length;
    var skills = "";
    if(skillLenght !== 0){
      for (let i = 0; i < skillsList.length; i++) {
        skills += "&skills[]="+skillsList[i];
      }
    }
    this.friendsService.getFriendsSearch(name, skills).subscribe(friend => {
      this.friends = friend
    });
  }
}
