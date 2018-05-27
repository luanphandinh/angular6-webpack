import { Component, OnInit, Type } from '@angular/core';
import { ExploreFetchOption, ExploreService } from '../../services/explore.service';
import { Movie } from '../../shared/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ActivatedRoute } from '@angular/router';

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
  type: string;
  constructor(
    private route: ActivatedRoute,
    private exploreService: ExploreService,
  ) {
  }

  ngOnInit() {
    this.items = [];
    this.route.params.subscribe((params : any) => {
      this.type = params.type;
      if (this.fetchOptions) {
        this.fetchOptions.page = 1;
        this.fetchMovies(true);
      }
    });

    this.exploreService.fetchOptions.subscribe((options: ExploreFetchOption) => {
      this.fetchOptions = options;
      this.fetchOptions.page = 1;
      this.items = [];
      this.fetchMovies();
    });
  }

  fetchMovies(replace: boolean = false) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.exploreService
      .fetchMovies(this.fetchOptions, this.type)
      .subscribe(data => this.onFetchDone(data, replace));
  }

  onFetchDone(data: any, replace: boolean = false) {
    this.total = data.total_results;
    const items: Go1ViewItem[] = [];
    data.results.forEach((result: any) => {
      const movie = Movie.createFromResponse(result, this.type);
      items.push(new Go1ViewItem(MovieCardComponent, movie));
    });
    if (this.fetchOptions.page === 1 || replace) {
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
