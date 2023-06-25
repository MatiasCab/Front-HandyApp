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
    CI: 87654321,
    firstname: "Rosana",
    lastname: "Melo",
    username: "rosamelo",
    singupDate: new Date("2023-03-20T11:28:29.000Z"),
    email: "rosamelo@gmail.com",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    friendshipStatus: 2,
    skills: [
      {
        id: 1,
        name: 'Jardineria'
      }
    ],
    friendsAmount: 10,
  }

  Users2: User = {
    id: 2,
    CI: 12345678,
    firstname: "Rosa",
    lastname: "Dias",
    username: "rosadias",
    singupDate: new Date('2023-02-20T11:28:29.000Z'),
    email: "rosadias@gmail.com",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    friendshipStatus: 2,
    skills: [
      {
        id: 1,
        name: 'Jardineria'
      },
      {
        id: 2,
        name: 'Botanica'
      }
    ],
    friendsAmount: 100,
  }

  UsersList: User[] = [this.Users1,this.Users2,this.Users1,this.Users2,this.Users1,this.Users2]
  UsersList2: User[] = [this.Users2]

  getMyProfile(): Observable<User>{
    return of(this.Users1);
  }

  getProfile(username: string): Observable<User>{
    if(username === "rosamelo") {
      return of(this.Users1)
    }else if(username === "rosadias"){
      return of(this.Users2)
    }else{
      return of();
    }
  }

  getUser(id: number): Observable<User>{
    return of(this.Users1);
  }

  // Actualizar las skills del usuario.
  updateUserSkills(skills: number[]): Observable<User>{
    return of(this.Users1);
  } //PUT
}
