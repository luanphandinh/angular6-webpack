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
  defaultFetchOption = {
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    page: 1,
  };

  constructor(
    private  gateWay: GatewayService,
  ) {
    this.fetchOptions$ = { ...this.defaultFetchOption };

    this.fetchOptionsSubject = new BehaviorSubject<ExploreFetchOption>(this.fetchOptions$);
    this.fetchOptions = this.fetchOptionsSubject.asObservable();
  }

  extendOptions(options: ExploreFetchOption, replace: boolean = false) {
    if (replace) {
      this.fetchOptions$ = { ...this.defaultFetchOption, ...options };
      this.fetchOptionsSubject.next(this.fetchOptions$);
      return;
    }
    this.fetchOptions$ = { ...this.fetchOptions$, ...options };
    this.fetchOptionsSubject.next(this.fetchOptions$);
  }

  fetchMovies(fetchOptions: ExploreFetchOption, type: string = 'movie'): Observable<any> {
    let endpoint = ['discover' , type].join('/');
    if (fetchOptions.query) {
      endpoint = ['search', type].join('/');
    }
    return this.gateWay.getApi(endpoint, fetchOptions);
  }

}

export interface ExploreFetchOption {
  language?: string;
  sort_by?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
  query?: string;
}
