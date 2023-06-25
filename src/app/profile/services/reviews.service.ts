import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review } from 'src/app/core/models/Review';
import { Reviews } from 'src/app/core/models/Reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() { }

  Review1: Review = {
    id: 1,
    description: 'iso un buen trabajo',
    score: 1,
    problemId: 1,
    problemName: 'Problem 1',
    creator: {
      id: 1,
      firstname: 'John',
      creatorUsername: 'john123'
    },
    reviewedUser: {
      id: 1,
      firstname: 'John',
      creatorUsername: 'john123'
    }
  }

  Review2: Review = {
    id: 1,
    description: 'rompio todo jajsj que hdp',
    score: 3,
    problemId: 1,
    problemName: 'Problem 2',
    creator: {
      id: 1,
      firstname: 'John',
      creatorUsername: 'john123'
    },
    reviewedUser: {
      id: 1,
      firstname: 'John',
      creatorUsername: 'john123'
    }
  }

  Reviews: Reviews = {
    good: 1,
    mid: 0,
    bad: 1,
    reviewedUser: {
      id: 1,
      firstname: 'John',
      creatorUsername: 'john123'
    },
    reviews: [this.Review1, this.Review2]
  }

  ListReviews: Reviews[] = [
    this.Reviews
  ]

  getReviews(user:number): Observable<Reviews[]>{
    return of(this.ListReviews);
  }
}
