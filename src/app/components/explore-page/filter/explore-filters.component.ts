import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOption } from './filter.component';
import { ExploreFetchOption, ExploreService } from '../../../services/explore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'explore-filter',
  template: `
    <div class="row mt-4" *ngIf="show">
      <div class="col-md-2">
        <common-filter
          [defaultValue]="defaultGenreValue"
          [key]="'with_genres'"
          [label]="'Genres'"
          [options]="genreOptions"
          (selectionChange)="filterSelectionChange($event)"
          (clearFilter)="clearFilter($event)">
        </common-filter>
      </div>
      <div class="col-md-2">
        <common-filter
          [defaultValue]="defaultCountryValue"
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
  defaultGenreValue: number;
  defaultCountryValue: string;
  show: boolean;

  constructor(
    private exploreService: ExploreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.exploreService.exploreType$.subscribe((type) => {
      this.genreOptions = this.exploreService.fetchGenreOptions(type);
    });
    this.countryOptions = this.exploreService.fetchCountryOptions();
    this.exploreService.fetchOptions$.subscribe((options) => {
      this.defaultGenreValue = options.with_genres;
      this.defaultCountryValue = options.with_original_language;
    });

    this.route.params.subscribe((params: any) => {
      this.show = params.type !== 'people';
    });
  }

  filterSelectionChange($event: any) {
    this.exploreService.extendOptions($event);
  }

  clearFilter($event: string) {
    this.exploreService.deleteOptions($event);
  }
}
