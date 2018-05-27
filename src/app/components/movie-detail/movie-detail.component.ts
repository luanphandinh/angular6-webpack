import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from '../../shared/people';
import { Movie } from '../../shared/movie';
import { MovieService } from '../../services/movie.service';
import { Review } from '../../shared/review';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  peoples: People[];
  reviews: Review[];
  similarMovies: Movie[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.movie = this.route.snapshot.data.movie;
      this.movieService.fetchPeople(this.movie.id, this.movie.type)
        .then((data: People[]) => this.peoples = data);
      this.movieService.fetchReview(this.movie.id, this.movie.type)
        .then((data: Review[]) => this.reviews = data);
      this.movieService.fetchSimilarMovies(this.movie.id, this.movie.type)
        .then((data: Movie[]) => this.similarMovies = data);
    });
  }

}
