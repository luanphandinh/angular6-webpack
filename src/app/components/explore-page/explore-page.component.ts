import { Component, OnInit, Type } from '@angular/core';
import { ExploreFetchOption, ExploreService } from '../../services/explore.service';
import { Movie } from '../../shared/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';

class Go1ViewItem {
  constructor(
    public component: Type<any>,
    public data: any,
  ) {}
}

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css'],
})
export class ExplorePageComponent implements OnInit {
  items: any[];
  total: number;
  selectedCount: number;
  loading: boolean;
  fetchOptions: ExploreFetchOption;
  constructor(
    private exploreService: ExploreService,
  ) {
  }

  ngOnInit() {
    this.items = [];
    this.exploreService.fetchOptions.subscribe((options: ExploreFetchOption) => {
      this.fetchOptions = options;
      this.fetchOptions.page = 1;
      this.items = [];
      this.fetchMovies();
    });
  }

  fetchMovies() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.exploreService
      .fetchMovies(this.fetchOptions)
      .subscribe(data => this.onFetchDone(data));
  }

  onFetchDone(data: any) {
    this.total = data.total_results;
    const items: Go1ViewItem[] = [];
    data.results.forEach((result: any) => {
      const movie = Movie.createFromResponse(result);
      items.push(new Go1ViewItem(MovieCardComponent, movie));
    });
    if (this.fetchOptions.page === 1) {
      this.items = null;
      this.items = items;
    } else {
      this.items = [...this.items, ...items];
    }
    this.loading = false;
    this.fetchOptions.page += 1;
  }

  onSelectedItem($event: any) {
    // const enableAction = $event.selectedCount === 0;
    // this.selectedCount = $event.selectedCount;
  }

}
