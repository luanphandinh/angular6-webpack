import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/index';

import { GatewayService } from './gateway.service';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  fetchOptions: Observable<ExploreFetchOption>;

  private fetchOptionsSubject: BehaviorSubject<ExploreFetchOption>;
  private fetchOptions$: ExploreFetchOption;

  constructor(
    private  gateWay: GatewayService,
  ) {
    this.fetchOptions$ = {
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
    };

    this.fetchOptionsSubject = new BehaviorSubject<ExploreFetchOption>(this.fetchOptions$);
    this.fetchOptions = this.fetchOptionsSubject.asObservable();
  }

  extendOptions(options: ExploreFetchOption, replace: boolean = false) {
    if (replace) {
      this.fetchOptions$ = { ...options };
      this.fetchOptionsSubject.next(this.fetchOptions$);
      return;
    }
    this.fetchOptions$ = { ...this.fetchOptions$, ...options };
    this.fetchOptionsSubject.next(this.fetchOptions$);
  }

  fetchMovies(fetchOptions: ExploreFetchOption): Observable<any> {
    const endpoint = 'discover/movie';
    return this.gateWay.getApi(endpoint, fetchOptions);
  }

}

export interface ExploreFetchOption {
  language?: string;
  sort_by?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
}
