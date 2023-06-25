import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  problems : boolean = false;

  chats : boolean = false;
  chats_myproblems : boolean = false;
  chats_otherproblems : boolean = false;

  friends : boolean = false;
  friends_myfriends : boolean = false;
  friends_addfriends : boolean = false;

  profiles : boolean = false;
  profiles_myprofile : boolean = false;
  profiles_myproblems : boolean = false;

  constructor(
    private location: Location, private Router: Router
  ) {
    Router.events.subscribe((val) => {
      this.ngOnInit();
  });
  }

  ngOnInit() {
    this.disableAll();
    var url = this.location.path();
    if (url.startsWith('/problems')){
      this.problems = true;
    }if (url == '/profile/'){
      this.profiles = true;
    }if (url == '/profile'){
      this.profiles = true;
      this.profiles_myprofile = true;
    }if (url == '/friends'){
      this.friends = true;
      this.friends_myfriends = true;
    }if (url =='/friends/addfriends'){
      this.friends = true;
      this.friends_addfriends = true;
    }if (url =='/chats/myproblems'){
      this.chats = true;
      this.chats_myproblems = true;
    }if (url =='/chats/otherproblems'){
      this.chats = true;
      this.chats_otherproblems = true;
    }if (url =='/my-problems'){
      this.profiles = true;
      this.profiles_myproblems = true;
    }if (url.startsWith('/my-problems/edit-problem')){
      this.problems = true;
    }
  }

  disableAll(){
    this.problems = false;
    this.chats = false;
    this.chats_myproblems = false;
    this.chats_otherproblems = false;
    this.friends = false;
    this.friends_myfriends = false;
    this.friends_addfriends = false;
    this.profiles = false;
    this.profiles_myprofile = false;
    this.profiles_myproblems = false;
  }

  goProblems(){
    this.disableAll();
    this.Router.navigate(['/problems']);
    this.problems = true;
  }

  goChatsMyProblems(){
    this.disableAll();
    this.Router.navigate(['/chats/myproblems']);
    this.chats = true;
    this.chats_myproblems = true;
  }

  goChatsOtherProblems(){
    this.disableAll();
    this.Router.navigate(['/chats/otherproblems']);
    this.chats = true;
    this.chats_otherproblems = true;
  }

  goFriendsMyFriends(){
    this.disableAll();
    this.Router.navigate(['/friends']);
    this.friends = true;
    this.friends_myfriends = true;
  }

  goFriendsAddFriends(){
    this.disableAll();
    this.Router.navigate(['/friends/addfriends']);
    this.friends = true;
    this.friends_addfriends = true;
  }

  goProfilesMyProfile(){
    this.disableAll();
    this.Router.navigate(['/profile']);
    this.profiles = true;
    this.profiles_myprofile = true;
  }

  goProfilesMyProblems(){
    this.disableAll();
    this.Router.navigate(['/my-problems']);
    this.profiles = true;
    this.profiles_myproblems = true;
  }

  logout(){
    localStorage.removeItem('token');
    this.Router.navigate(['/login']);    
  }
}
