import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/internal/operators';
import { ExploreFetchOption, ExploreService } from 'app/services/explore.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchItems: any[];
  loading: boolean;
  fetchOptions: ExploreFetchOption;
  type: string;
  searchText: string;

  constructor(
    private router: Router,
    private exploreService: ExploreService,
  ) { }

  ngOnInit() {
    this.searchItems = [];
    this.type = 'movie';

    this.exploreService.exploreType$.subscribe((type: string) => this.type = type);
    this.exploreService.fetchOptions$.subscribe((options: ExploreFetchOption) => {
      this.fetchOptions = options;
    });
  }

  onSearchTextChanged(searchQuery: string) {
    this.fetchOptions.query = searchQuery;
    this.fetchOptions.page = 1;
    return this.exploreService
      .fetchMovies(this.fetchOptions, this.type)
      .pipe(
        map((data: any) => this.onFetchDone(data)),
      );
  }

  onFetchDone(data: any) {
    const items: any[] = [];
    data.results.forEach((hit :any) => {
      const item = {
        id: hit.id,
        text: hit.title || hit.original_name,
        type: this.type,
      };
      items.push(item);
    });
    this.searchItems = items;
    this.loading = false;
    return this.searchItems;
  }

  doSearch(searchQuery: string) {
    this.fetchOptions.page = 1;
    this.fetchOptions.query = searchQuery;
    this.exploreService.extendOptions(this.fetchOptions, true);
    this.router.navigateByUrl(['app', 'explore', this.type].join('/'));
  }

  selectSearchItem(item: any) {
    this.fetchOptions.query = null;
    this.fetchOptions.with_genres = null;
    this.fetchOptions.with_original_language = null;
    this.exploreService.extendOptions(this.fetchOptions, true);
    this.router.navigateByUrl(`app/detail/${this.type}/${item.id}`);
  }


}
