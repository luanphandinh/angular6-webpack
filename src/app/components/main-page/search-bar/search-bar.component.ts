import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  type: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private exploreService: ExploreService,
  ) { }

  ngOnInit() {
    this.searchItems = [];
    this.type = 'movie';
    this.activatedRoute.params.subscribe((params: any) => {
      this.type = params.type || 'movie';
      if (this.fetchOptions) {
        this.fetchOptions.page = 1;
      }
    });
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
        text: hit.title || hit.original_name,
        type: this.type,
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
    this.router.navigateByUrl(['app', 'explore', this.type].join('/'));
  }

  selectSearchItem(data: any) {
    this.router.navigateByUrl(`app/detail/${data.item.type}/${data.item.id}`);
  }


}
