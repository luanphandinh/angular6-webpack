import { Component } from '@angular/core';
import { ExploreFetchOption, ExploreService } from 'app/services/explore.service';

@Component({
  selector: 'sort',
  template: `
    <div class="btn-group mr-3">
      <div class="btn-group" ngbDropdown role="group" aria-label="">
        <button class="btn btn-outline-primary" ngbDropdownToggle>{{ selectedSort.value }}</button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <button
            class="dropdown-item" 
            *ngFor="let sortValue of sortValues"
            (click)="onSelectSort(sortValue)">
            {{ sortValue.value }}
          </button>
        </div>
      </div>
      <div class="btn-group" ngbDropdown role="group" aria-label="">
        <button class="btn btn-outline-primary" ngbDropdownToggle>{{ selectedDirection.value }}</button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <button 
            class="dropdown-item" 
            *ngFor="let direction of sortDirections" 
            (click)="onSelectDirection(direction)">
            {{ direction.value }}
          </button>
        </div>
      </div>
    </div>
  `,
})
export class SortComponent {
  sortValues: { key: string, value: string }[] = [
    { key: 'popularity', value: 'Popularity' },
    { key: 'release_date', value: 'Release date' },
    { key: 'vote_average', value: 'Vote average' },
    { key: 'revenue', value: 'Revenue' },
  ];

  sortDirections: { key: string, value: string }[] = [
    { key: 'desc', value: 'DESC' },
    { key: 'asc', value: 'ASC' },
  ];

  selectedSort: any;
  selectedDirection: any;

  constructor(
    private exploreService: ExploreService,
  ) {
    this.selectedSort = this.sortValues[0];
    this.selectedDirection = this.sortDirections[0];
  }

  onSelectSort(sortValue: any) {
    this.selectedSort = sortValue;
    this.emitOptions();
  }

  onSelectDirection(sortDirection: any) {
    this.selectedDirection = sortDirection;
    this.emitOptions();
  }

  emitOptions() {
    const fetchOptions: ExploreFetchOption = {
      sort_by: [this.selectedSort.key, this.selectedDirection.key].join('.'),
    };
    this.exploreService.extendOptions(fetchOptions);
  }
}
