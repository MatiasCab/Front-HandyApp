import { Component } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.scss']
})
export class AddfriendsComponent {

  people?: User[];
  constructor(
    private friendsService: FriendsService
  ) { }

  ngOnInit(){
    this.friendsService.getNotFriends().subscribe(friend => {
      this.people = friend["users"];
    });
  }

  searchNotFriends(event : any){
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
    this.friendsService.getNotFriendsSearch(name, skills).subscribe(people => {
      console.log(people);
      this.people = people["users"]
    });
  }
}
