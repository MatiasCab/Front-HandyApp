import { Injectable } from '@angular/core';

import { Problem } from '../models/Problem'

import { BehaviorSubject } from 'rxjs';;

import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  

  constructor() { }

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

  getProblems(): Observable<Problem[]>{
    return of(this.Problems);
  }

  getProblemById(id: number): Observable<Problem | undefined> {
    return of(this.Problems.find(problem => problem.id === id));
  }
  



}
