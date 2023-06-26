import { Component, Input } from '@angular/core';
import { Review } from 'src/app/core/models/Review';
import { ReviewsService } from 'src/app/profile/services/reviews.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-review',
  templateUrl: './problem-review.component.html',
  styleUrls: ['./problem-review.component.scss']
})
export class ProblemReviewComponent {

  @Input() problemID?: string;
  review?: Review;
  goodReview: boolean = false;
  midReview: boolean = false;
  badReview: boolean = false;

  constructor(
    private reviewsService: ReviewsService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.reviewsService.getReviewsByProblem(this.problemID!).subscribe(reviews => {
      console.log(reviews["review"]);
      this.review = reviews["review"];
      if (this.review?.score === 3){
        this.goodReview = true;
      }else if (this.review?.score === 2){
        this.midReview = true;
      }else if (this.review?.score === 1){
        this.badReview = true;
      }
    });
  }

  seeProfile(){
    this.Router.navigate(['/profile/' + this.review?.reviewedUser!.id]);
  }
}
