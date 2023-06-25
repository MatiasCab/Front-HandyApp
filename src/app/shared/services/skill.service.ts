import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Skill } from '../../core/models/Skill';

import { API_URL } from 'src/app/core/const';

import { HttpClient } from '@angular/common/http';

const API_AUTH_URL = `${API_URL}/skills`;

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private http: HttpClient
  ) { }

  getSkills(){
    return this.http.get<any>(`${API_AUTH_URL}`).pipe(
      catchError(this.handleError<any>('getSkills'))
    );
  }

  getSkillById(id: number) {
    return this.http.get<any>(`${API_AUTH_URL}/${id}`)
  }

  private handleError<T>(operation: String) {
    return (error: any) => {
      console.log(error);
      console.error(`${operation} failed: ${error.error.message}`);
      if (error.error.name == 'CredentialsAlredyExistsError') {
        return of({ error: true, type: 'RepitedCredentials' });
      } else if (error.error.name == 'InvalidUsernameOrPassword') {
        return of({ error: true, type: 'InvalidCredentials' });
      } else if (error.error.name == 'InvalidVerificationCode') {
        return of({ error: true, type: 'InvalidCode' })
      } else {
        return of({ error: true, type: 'Server' });
      }
    };
  }
}
