import { Injectable } from '@angular/core';

import { Movie } from '../shared/movie';
import { GatewayService } from './gateway.service';
import { People } from '../shared/people';
import { Review } from '../shared/review';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(
    private gateWay: GatewayService,
  ) {
  }

  fetchMovie(id: number): Promise<Movie> {
    const endpoint = ['movie', id].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => Movie.createMovieDetailFromResponse(data));
  }

  fetchSimilarMovies(id: number): Promise<Movie[]> {
    const endpoint = ['movie', id, 'recommendations'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => Movie.createCollectionFromResponse(data.results, 3));
  }

  fetchPeople(id: number): Promise<People[]> {
    const endpoint = ['movie', id, 'credits'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => People.createCollectionFromResponse(data.cast, 6));
  }

  fetchReview(id: number): Promise<Review[]> {
    const endpoint = ['movie', id, 'reviews'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => Review.createCollectionFromResponse(data.results, 3));
  }

}
