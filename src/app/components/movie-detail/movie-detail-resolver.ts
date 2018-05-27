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
    const type = route.paramMap.get('type');
    return this.movieService.fetchMovie(movieId, type)
      .then((movie: Movie) => movie);
  }
}
