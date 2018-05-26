import { Component, OnInit, Input } from '@angular/core';

import { People } from '../../../shared/people';

@Component({
  selector: 'top-cast-list',
  template: `
    <div class="row">
      <div *ngFor="let people of peoples" class="col-md-2">
        <people-card [people]="people"></people-card>
      </div>  
    </div>
  `,
})
export class TopCastListComponet implements OnInit {
  @Input() peoples: People[];
  @Input() isHover: boolean;

  constructor(
  ) { }

  ngOnInit() {
  }
}
