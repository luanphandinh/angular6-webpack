import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from '../../shared/people';
import { Movie } from '../../shared/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  peoples: People[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
    this.movieService.fetchPeople(this.movie.id)
      .then((data: People[]) => this.peoples = data);
  }

}
