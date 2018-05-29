import {
  Component, Input, OnInit, Output, EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.css'],
})
export class CommonSearchComponent implements OnInit {
  @Input() delayOnType: number;
  @Input() searchItems: any[];
  @Input() disableSearch: boolean;
  @Input() helpText: string;
  @Input() textChange: Function;
  @Input() searchText: string;

  @Output() search = new EventEmitter<string>();
  @Output() selectItem = new EventEmitter<any>();

  constructor() { }

  searchGroup: FormGroup;

  formatter = (result: any) => result.text;

  searching = (text$: Observable<any>) => text$.pipe(
    debounceTime(this.delayOnType || 300),
    distinctUntilChanged(),
    switchMap(term => this.textChange(term)),
  )

  ngOnInit() {
    this.searchGroup = new FormGroup({
      searchControl: new FormControl(),
    });
  }

  selectedItem($event: any) {
    $event.preventDefault();
    this.searchText = null;
    this.selectItem.emit($event.item);
  }

  onSubmit(form: any) {
    if (this.disableSearch) {
      return;
    }
    this.search.emit(form.searchControl);
  }

}
