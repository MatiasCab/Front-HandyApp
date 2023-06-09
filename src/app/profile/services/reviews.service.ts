import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reviews } from 'src/app/core/models/Reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() { }

  Reviews: Reviews = {
    user: "id",
    good: 10,
    mid: 1,
    bad: 12,
    problems: ["Gutierrez","Gomez","Gonzalez","Garcia","Dieo","aaa","aaaaaa"]
  }

  Problems: Reviews[] = [
    this.Reviews
  ]

  getReviews(user:number): Observable<Reviews[]>{
    return of(this.Problems);
  }
}
