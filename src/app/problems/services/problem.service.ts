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

  Problem1: Problem = {
    id: 1,
    picture: 'https://img.freepik.com/foto-gratis/paisaje-pastizales-entorno-verde-fondo-parque_1112-1183.jpg?w=2000',
    name: 'Ayuda con el Jardín',
    description: 'Necesito ayuda con el jardín de mi casa, se me ha hecho un poco difícil mantenerlo en buen estado',
    date: new Date('4/30/2023'),
    skills: [1, 2],
    location: 'Calle 1 # 2-3',
    status: 'Resuelto',
    userid: 1
  }

  Problem2: Problem = {
    id: 2,
    picture: 'https://img.freepik.com/foto-gratis/paisaje-pastizales-entorno-verde-fondo-parque_1112-1183.jpg?w=2000',
    name: 'Ayuda con el Jardín',
    description: 'Necesito ayuda con el jardín de mi casa, se me ha hecho un poco difícil mantenerlo en buen estado',
    date: new Date('6/1/2022'),
    skills: [1, 2],
    location: 'Calle 1 # 2-3',
    status: 'Pendiente',
    userid: 2
  }

  Problems: Problem[] = [
    this.Problem1,
    this.Problem2

  ]

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
    return of(this.Problems.find(problem => problem.id === id));
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
