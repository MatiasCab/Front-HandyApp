import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  Profile: User = {
    id: 1,
    firstname: "Rosana",
    lastname: "Melo",
    username: "rosamelo",
    //singupDate?: ,
    email: "rosamelo@gmail.com",
    description: "Hola soy rosana",
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    friendshipStatus: 1,
    skills: [1,2],
    friendsAmount: 10,
  }

  Problems: User[] = [
    this.Profile
  ]

  getProfile(): Observable<User[]>{
    return of(this.Problems);
  }
}
