import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/User';

import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user1: User = {
    id: 1,
    profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    ci: '12345678',
    firstName: 'Juan',
    lastname: 'Perez',
    email: 'juanperez@gmail.com',
    birthdate: new Date('12/12/1990'),
    address: 'Calle 1 # 2-3',
    joinedDate: new Date('12/12/2021'),

  }
  user2: User = {
    id: 2,
    profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    ci: '56473612',
    firstName: 'Maria',
    lastname: 'Flores',
    email: 'mariaflores@gmail.com',
    birthdate: new Date('05/15/2001'),
    address: 'Calle 8 # 1-4',
    joinedDate: new Date('01/12/2023')
  }
  

  users: User[] = [
    this.user1,
    this.user2
  ]

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  getUser(id: number): Observable<User|undefined>{
    return of(this.users.find(user => user.id === id));
  }

}
