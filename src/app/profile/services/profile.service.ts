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
    profilePic: "https://www.w3schools.com/howto/img_avatar.png",
    ci: "4232332423",
    firstName: "Gaston",
    lastname: "Gutierrez",
    description: "Faso",
    email: "fasito@gmail.com",
    skills: [1,2]
    //birthdate: Date,
    //address: string,
    //joinedDate: Date,
  }

  Problems: User[] = [
    this.Profile
  ]

  getProfile(): Observable<User[]>{
    return of(this.Problems);
  }
}
