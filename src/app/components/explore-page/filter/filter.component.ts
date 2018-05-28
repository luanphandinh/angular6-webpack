import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'common-filter',
  template: `
    <div class="filter-wrapper">
      <span>{{label}}</span>
      <ng-select 
        [items]="options | async" 
        bindLabel="value"
        bindValue="key" 
        [(ngModel)]="selectedOptionKey" 
        (change)="onSelectionChange()" 
        (clear)="onClear()">
      </ng-select>
    </div>
  `,
})
export class CommonFilterComponent implements OnInit {
  @Input() label: string;
  @Input() key: string;
  @Input() options: Observable<FilterOption[]>;
  selectedOptionKey?: string;

  @Output() selectionChange = new EventEmitter<FilterEvent>();
  @Output() clearFilter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectionChange() {
    const $event = {};
    $event[this.key] = this.selectedOptionKey;
    this.selectionChange.emit($event);
  }

  onClear() {
    this.clearFilter.emit(this.key);
  }

}

export interface FilterEvent {
  key?: string;
}

export interface FilterOption {
  key: string;
  value: string;
}
