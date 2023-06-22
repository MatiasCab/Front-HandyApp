import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  Users1: User = {
    id: 1,
    firstname: "Rosana",
    lastname: "Melo",
    username: "rosamelo",
    singupDate: "2023-03-20T11:28:29.000Z",
    email: "rosamelo@gmail.com",
    description: "Hola soy rosana",
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    friendshipStatus: 2,
    skills: [1,2],
    friendsAmount: 10,
  }

  Users2: User = {
    id: 2,
    firstname: "Rosa",
    lastname: "Dias",
    username: "rosadias",
    singupDate: "2023-02-20T11:28:29.000Z",
    email: "rosadias@gmail.com",
    description: "yo tambien soy rosa",
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    friendshipStatus: 1,
    skills: [1,2],
    friendsAmount: 100,
  }

  UsersList: User[] = [this.Users1,this.Users2]

  getMyProfile(): Observable<User>{
    return of(this.Users1);
  }

  getMyFriends(): Observable<User[]>{
    return of(this.UsersList);
  }

  getUser(id: number): Observable<User>{
    return of(this.Users1);
  }
}
