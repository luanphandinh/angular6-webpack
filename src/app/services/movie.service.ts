import { Injectable } from '@angular/core';

import { Movie } from '../shared/movie';
import { GatewayService } from './gateway.service';
import { People } from '../shared/people';

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

  fetchPeople(id: number): Promise<People[]> {
    const endpoint = ['movie', id, 'credits'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => People.createCollectionFromResponse(data.cast, 5));
  }
}
