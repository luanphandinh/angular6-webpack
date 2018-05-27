import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreFetchOption, ExploreService } from '../../../services/explore.service';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchItems: any[];
  loading: boolean;
  fetchOptions: ExploreFetchOption;

  constructor(
    private router: Router,
    private exploreService: ExploreService,
  ) { }

  ngOnInit() {
    this.searchItems = [];
    this.exploreService.fetchOptions.subscribe((options: ExploreFetchOption) => {
      this.fetchOptions = options;
    });
  }

  onSearchTextChanged(searchQuery: string) {
    this.fetchOptions.query = searchQuery;
    this.fetchOptions.page = 1;
    this.exploreService
      .fetchMovies(this.fetchOptions)
      .subscribe(data => this.onFetchDone(data));
  }

  onFetchDone(data: any) {
    const items: any[] = [];
    data.results.forEach((hit :any) => {
      const item = {
        id: hit.id,
        text: hit.title,
      };
      items.push(item);
    });
    this.searchItems = items ? [...items] : [];
    this.loading = false;
  }

  doSearch(searchQuery: string) {
    this.fetchOptions.page = 1;
    if (searchQuery && searchQuery.trim().length) {
      this.fetchOptions.query = searchQuery;
    } else {
      delete this.fetchOptions.query;
    }
    this.exploreService.extendOptions(this.fetchOptions, true);
    this.router.navigateByUrl('app/explore/movie');
  }

  selectSearchItem(data: any) {
    this.router.navigateByUrl(`app/detail/movie/${data.item.id}`);
  }


}
