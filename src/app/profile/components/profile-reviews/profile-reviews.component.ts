import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { Reviews } from 'src/app/core/models/Reviews';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from 'src/app/core/models/Review';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.scss']
})
export class ProfileReviewsComponent {

  @Input() User: User | undefined;
  reviews!: Reviews;
  problems: Review[] = [];
  score: number = 1;
  //id?: number;
  //viewOption?: string; //['otherView', 'myView', 'myCompleteView']

  constructor(
    private ReviewsService: ReviewsService,
  ) {}

  ngOnInit(): void {
    this.ReviewsService.getReviews(this.User!.id!.toString()).subscribe(profile => {
      console.log(profile);
      this.reviews = profile["reviewsInfo"];
      console.log(this.reviews);
      this.problems = this.reviews["reviews"];
      console.log(this.problems);
    });
    
  }
}
