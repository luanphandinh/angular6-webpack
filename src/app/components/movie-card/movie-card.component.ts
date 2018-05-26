import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  styleUrls: ['./movie-card.component.css'],
  template: `
    <common-card-view
      [image]="data.image"
      [overview]="data.overview"
      [title]="data.title"
      [subtitle]="data.subtitle"
      [isHover]="data.isHover"
      [cardObject]="data"
      (clickCard)="onClickCard($event)">
    </common-card-view>
  `,
})
export class MovieCardComponent implements OnInit {
  @Input() data: Movie;
  @Input() isHover: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickCard($event: any) {
    this.router.navigateByUrl(`app/movie/${this.data.id}`);
  }
}
