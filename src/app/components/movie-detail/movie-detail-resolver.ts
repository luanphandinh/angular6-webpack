import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Movie } from '../../shared/movie';
import { MovieService } from '../../services/movie.service';


@Injectable()
export class MovieDetailResolver implements Resolve<Movie> {
  constructor(
    private movieService: MovieService,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const movieId = Number(route.paramMap.get('id'));
    return this.movieService.fetchMovie(movieId)
      .then((movie: Movie) => movie);
  }
}
