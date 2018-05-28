import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOption } from './filter.component';
import { ExploreFetchOption, ExploreService } from '../../../services/explore.service';

@Component({
  selector: 'explore-filter',
  template: `
    <div class="row mb-4">
      <div class="col-md-2">
        <common-filter
          [key]="'with_genres'"
          [label]="'Genres'"
          [options]="genreOptions"
          (selectionChange)="filterSelectionChange($event)"
          (clearFilter)="clearFilter($event)">
        </common-filter>
      </div>
      <div class="col-md-2">
        <common-filter
          [key]="'with_original_language'"
          [label]="'Countries'"
          [options]="countryOptions"
          (selectionChange)="filterSelectionChange($event)"
          (clearFilter)="clearFilter($event)">
        </common-filter>
      </div>
      <div class="col-md-2">
        <common-filter
          [key]="'schedule'"
          [label]="'Schedules'"
          [options]="scheduleOptions"
          (selectionChange)="filterSelectionChange($event)"
          (clearFilter)="clearFilter($event)">
        </common-filter>
      </div>
    </div>
  `,
})
export class ExploreFiltersComponent implements OnInit {
  genreOptions: Observable<FilterOption[]>;
  countryOptions: Observable<FilterOption[]>;
  fetchOptions: ExploreFetchOption;

  constructor(
    private exploreService: ExploreService,
  ) { }

  ngOnInit() {
    this.exploreService.exploreType$.subscribe((type) => {
      this.genreOptions = this.exploreService.fetchGenreOptions(type);
    });
    this.countryOptions = this.exploreService.fetchCountryOptions();
  }

  filterSelectionChange($event: any) {
    this.exploreService.extendOptions($event);
  }

  clearFilter($event: string) {
    this.exploreService.deleteOptions($event);
  }
}
