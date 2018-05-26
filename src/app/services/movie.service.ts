import { Injectable } from '@angular/core';

import { Movie } from '../shared/movie';
import { GatewayService } from './gateway.service';

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
}
