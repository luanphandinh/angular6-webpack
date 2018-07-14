import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Review } from 'app/movie-app/shared/review';

@Component({
  selector: 'review',
  styleUrls: ['./review.component.scss'],
  template: `
    <div class="container">
      <div class="review-wrapper has-border has-box-shadow mb-4">
        <div class="avatar-wrapper">
          <div class="avatar has-cursor round">{{ review.getAuthorAvatar() }}</div>
        </div>
        <div class="review-content">
          <div class="name text-md text-bold has-cursor mb-2">A review by {{ review.author }}</div>
          <div class="text-md" [innerHTML]="review.content"></div>
        </div>
      </div>
    </div>
  `,
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  @Input() isHover: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickCard($event: any) {
    // this.router.navigateByUrl(`app/movie/${this.data.id}`);
  }
}
