import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../shared/movie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }

  onAddCourse() {
  }

}
