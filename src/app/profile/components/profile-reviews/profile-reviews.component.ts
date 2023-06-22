import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { Reviews } from 'src/app/core/models/Reviews';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.scss']
})
export class ProfileReviewsComponent {

  @Input() User: User | undefined;
  reviews!: Reviews;
  //id?: number;
  //viewOption?: string; //['otherView', 'myView', 'myCompleteView']

  constructor(
    private ReviewsService: ReviewsService,
  ) {}

  ngOnInit(): void {
    this.ReviewsService.getReviews(1).subscribe(profile => {
      this.reviews = profile[0];
    });
    /*
    this.route.params.subscribe(params => {
      this.id = params['problemId']; // 'id' es el nombre del parámetro definido en tu archivo de enrutamiento
      if(this.id == 1) {
        this.viewOption = 'otherView';
      } else if (this.id == 2) {
        this.viewOption = 'myView';
      } else {
        this.viewOption = 'myCompleteView';
      }
    
    });
    */
  }
}
