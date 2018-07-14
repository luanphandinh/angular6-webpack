import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from 'app/movie-app/shared/movie';
@Component({
  selector: 'movie-card',
  styleUrls: ['./movie-card.component.css'],
  template: `
    <lupa-card
      [image]="data.image"
      [overview]="data.overview"
      [title]="data.title"
      [subtitle]="'★  ' + data.subtitle"
      [isHover]="data.isHover"
      [cardObject]="data"
      (clickCard)="onClickCard($event)">
    </lupa-card>
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
    this.router.navigateByUrl(`app/detail/${this.data.type}/${this.data.id}`);
  }
}
