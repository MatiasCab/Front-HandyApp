import { Injectable } from '@angular/core';
import { User } from '../models/User';

import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user1: User = {
    id: 1,
    ci: '12345678',
    firstName: 'Juan',
    lastname: 'Perez',
    email: 'juanperez@gmail.com',
    birthdate: new Date(12/12/1990),
    address: 'Calle 1 # 2-3'
  }

  users: User[] = [
    this.user1
  ]

  getUsers(): Observable<User[]>{
    return of(this.users);
  }
}
