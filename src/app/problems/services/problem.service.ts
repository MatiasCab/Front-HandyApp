import { Injectable } from '@angular/core';

import { Problem } from '../../core/models/Problem'

import { catchError } from 'rxjs';;

import { of } from 'rxjs';

import { API_URL } from 'src/app/core/const';

import { HttpClient } from '@angular/common/http';

const API_AUTH_URL = `${API_URL}/problems`;
const API_AUTH_URL_MY_PROBLEMS = `${API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(
    private http: HttpClient
  ) { }

  getProblems(){
    return this.http.get<any>(`${API_AUTH_URL}`).pipe(
      catchError(this.handleError<any>('getProblems'))
    );
  }

  getMyProblems(){
    const idUser = localStorage.getItem('user_ID');
    return this.http.get<any>(`${API_AUTH_URL_MY_PROBLEMS}/${idUser}/problems`)
  }

  getProblemById(id: number) {
    return this.http.get<any>(`${API_AUTH_URL}/${id}`)
  }

  postProblem(problem: Problem){
    return this.http.post<any>(`${API_AUTH_URL}`, problem).pipe(
      catchError(this.handleError<any>('postProblem'))
    );
  }

  putProblem(problem: Problem){
    return this.http.put<any>(`${API_AUTH_URL}/${problem.id}`, problem).pipe(
      catchError(this.handleError<any>('postProblem'))
    );
  }

  getProblemsFiltered(name: string, skills: string) {
    return this.http.get<any>(`${API_AUTH_URL}?${name}${skills}`).pipe(
      catchError(this.handleError<any>('getFriendsSearch'))
    );
  }
  getProblemsFiltered2(filters: string) {
    console.log(`${API_AUTH_URL}?${filters}`)
    return this.http.get<any>(`${API_AUTH_URL}?${filters}`).pipe(
      catchError(this.handleError<any>('getFriendsSearch'))
    );
  }

  getProblemsFilteredFriends(friendshipstatus: string, name?: string, skills?: string){
    return this.http.get<any>(`${API_AUTH_URL}${friendshipstatus}${name?name:''}${skills?skills:''}`).pipe(
      catchError(this.handleError<any>('getFriendsSearch'))
    );
  }

  getProblemsFilteredStatus(status: string){
    const idUser = localStorage.getItem('user_ID');
    console.log(`${API_AUTH_URL}/${idUser}/problems?${status}`);
    return this.http.get<any>(`${API_AUTH_URL_MY_PROBLEMS}/${idUser}/problems?${status}`).pipe(
      catchError(this.handleError<any>('getFriendsSearch'))
    );
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
