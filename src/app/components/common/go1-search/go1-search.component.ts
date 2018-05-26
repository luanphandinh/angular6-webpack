import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'go1-search',
  templateUrl: './go1-search.component.html',
  styleUrls: ['./go1-search.component.css'],
})
export class Go1SearchComponent implements OnInit {
  @Input() delayOnType: number;
  @Input() searchItems: any[];
  @Input() disableSearch: boolean;
  @Input() helpText: string;

  @Output() textChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  @Output() selectItem = new EventEmitter<any>();

  searchGroup: FormGroup;

  formatter = (result: any) => result.text;

  searching = (text$: Observable<any>) =>
    text$.pipe(
      debounceTime(this.delayOnType || 300),
      distinctUntilChanged(),
      map((term: any) => term.length < 2
          ? []
          : this.searchItems
          .filter((item: any) =>
            item.text.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    )

  ngOnInit() {
    const searchControl = new FormControl();
    searchControl
      .valueChanges
      .subscribe((value: string) => this.textChange.emit(value));
    this.searchGroup = new FormGroup({
      searchControl,
    });
  }

  selectedItem(item: any) {
    this.selectItem.emit(item);
  }

  onSubmit(form: any) {
    if (this.disableSearch) {
      return;
    }
    this.search.emit(form.searchControl);
  }

}
