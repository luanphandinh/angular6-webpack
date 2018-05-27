import { Injectable } from '@angular/core';

import { Movie } from '../shared/movie';
import { GatewayService } from './gateway.service';
import { People } from '../shared/people';
import { Review } from '../shared/review';
import { Video } from '../shared/video';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(
    private gateWay: GatewayService,
  ) {
  }

  fetchMovie(id: number, type: string): Promise<Movie> {
    const endpoint = [type, id].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => Movie.createMovieDetailFromResponse(data, type));
  }

  fetchSimilarMovies(id: number, type: string = 'movie'): Promise<Movie[]> {
    const endpoint = [type, id, 'recommendations'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => {
        const movies = Movie.createCollectionFromResponse(data.results, 3);
        movies.forEach(movie => movie.type = type);
        return movies;
      });
  }

  fetchPeople(id: number, type: string = 'movie'): Promise<People[]> {
    const endpoint = [type, id, 'credits'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => People.createCollectionFromResponse(data.cast, 6));
  }

  fetchReview(id: number, type: string = 'movie'): Promise<Review[]> {
    const endpoint = [type, id, 'reviews'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => Review.createCollectionFromResponse(data.results, 3));
  }

  fetchVideos(id: number, type: string = 'movie'): Promise<Video[]> {
    const endpoint = [type, id, 'videos'].join('/');
    return this.gateWay.getApi(endpoint)
      .toPromise()
      .then((data: any) => Video.createCollectionFromResponse(data.results));
  }

}
