import { Injectable } from '@angular/core';

import { Problem } from '../../core/models/Problem'

import { BehaviorSubject, catchError } from 'rxjs';;

import {Observable, of} from 'rxjs';

import { API_URL } from 'src/app/core/const';

import { HttpClient } from '@angular/common/http';

const API_AUTH_URL = `${API_URL}/problems`;

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  

  constructor(
    private http: HttpClient
  ) { }

  private problemsSubject: BehaviorSubject<Problem[]> = new BehaviorSubject<Problem[]>([]);
  problems$ = this.problemsSubject.asObservable();

  sendProblems(nuevosValores: Problem[]) {
    this.problemsSubject.next(nuevosValores);
  }

  getProblems(){
    return this.http.get<any>(`${API_AUTH_URL}`).pipe(
      catchError(this.handleError<any>('getProblems'))
    );
  }

  getProblemById(id: number) {
    return this.http.get<any>(`${API_AUTH_URL}/${id}`)
  }

  postProblem(problem: Problem){
    return this.http.post<any>(`${API_AUTH_URL}`, problem).pipe(
      catchError(this.handleError<any>('postProblem'))
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
