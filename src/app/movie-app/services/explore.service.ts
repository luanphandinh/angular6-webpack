import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

import { FilterOption } from 'app/movie-app/components/explore-page/filter/filter.component';
import { GatewayService } from 'app/movie-app/services/gateway.service';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  fetchOptions$: Observable<ExploreFetchOption>;
  exploreType$: Observable<string>;

  private fetchOptionsSubject: BehaviorSubject<ExploreFetchOption>;
  private exploreTypeSubject: BehaviorSubject<string>;
  private fetchOptions: ExploreFetchOption;
  private exploreType: string;
  defaultFetchOption = {
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    page: 1,
  };

  constructor(
    private gateWay: GatewayService,
    private route: Router,
  ) {
    this.fetchOptions = { ...this.defaultFetchOption };
    this.exploreType = 'movie';

    this.fetchOptionsSubject = new BehaviorSubject<ExploreFetchOption>(this.fetchOptions);
    this.exploreTypeSubject = new BehaviorSubject<string>(this.exploreType);
    this.fetchOptions$ = this.fetchOptionsSubject.asObservable();
    this.exploreType$ = this.exploreTypeSubject.asObservable();
  }

  extendOptions(options: ExploreFetchOption, replace: boolean = false) {
    if (replace) {
      this.fetchOptions = { ...this.defaultFetchOption, ...options };
    } else {
      this.fetchOptions = { ...this.fetchOptions, ...options };
    }
    this.fetchOptions.page = 1;
    this.fetchOptionsSubject.next(this.fetchOptions);
  }

  deleteOption(key: string) {
    this.fetchOptions[key] = null;
    this.fetchOptionsSubject.next({ ...this.fetchOptions });
  }

  deleteOptions(keys: string[] | string) {
    if (!keys) return;
    const toDeleteKeys: any = keys.length ? keys : [keys];
    toDeleteKeys.forEach((value: any) => this.deleteOption(value));
  }

  setExploreType(type: string) {
    this.exploreType = type;
    this.exploreTypeSubject.next(type);
  }

  fetchMovies(fetchOptions: ExploreFetchOption, type: string = 'movie'): Observable<any> {
    let endpoint = ['discover' , type].join('/');
    if (fetchOptions.query) {
      endpoint = ['search', type].join('/');
    }
    return this.gateWay.getApi(endpoint, fetchOptions);
  }

  fetchGenreOptions(type: string = 'movie'): Observable<FilterOption[]> {
    const endpoint = ['genre' , type, 'list'].join('/');
    return this.gateWay.getApi(endpoint)
      .pipe(
        map(response =>
          response.genres.map((genre: any) =>
            ({ key: genre.id, value: genre.name }),
          ),
        ),
      );
  }

  fetchCountryOptions(): Observable<FilterOption[]> {
    const endpoint = ['configuration', 'languages'].join('/');
    return this.gateWay.getApi(endpoint)
      .pipe(
        map(response =>
          response.map((country: any) =>
            ({ key: country.iso_639_1, value: country.english_name }),
          ),
        ),
      );
  }

  goToExplore() {
    this.route.navigateByUrl(`app/explore/${this.exploreType}`);
  }

}

export interface ExploreFetchOption {
  language?: string;
  sort_by?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
  query?: string;
  with_genres?: number;
  with_original_language?: string;
}
