import { Component, OnInit, Input } from '@angular/core';

import { Review } from '../../../shared/review';

@Component({
  selector: 'reviews',
  template: `
    <div class="row">
      <div *ngFor="let review of reviews">
        <review [review]="review"></review>
      </div>  
    </div>
  `,
})
export class ReviewsComponent implements OnInit {
  @Input() reviews: Review[];

  constructor(
  ) { }

  ngOnInit() {
  }
}
