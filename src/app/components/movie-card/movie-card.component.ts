import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  styleUrls: ['./movie-card.component.css'],
  template: `
    <go1-card
      [image]="data.image"
      [overview]="data.overview"
      [title]="data.title"
      [subtitle]="data.subtitle"
      [isHover]="data.isHover"
      [cardObject]="data"
      (clickCard)="onClickCard($event)">
    </go1-card>
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
