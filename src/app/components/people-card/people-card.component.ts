import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { People } from 'app/shared/people';

@Component({
  selector: 'people-card',
  styleUrls: ['./people-card.component.scss'],
  template: `
    <div class="card-wrapper has-border">
      <div class="avatar has-cursor" [ngStyle]="people.getBackgroundStyle()"></div>
      <div class="name text-sm text-bold">{{ people.name }}</div>
      <div class="character-name text-sm" ellipsis>{{ people.character }}</div>  
    </div>
  `,
})
export class PeopleCardComponent implements OnInit {
  @Input() people: People;
  @Input() isHover: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickCard($event: any) {
    // this.router.navigateByUrl(`app/movie/${this.data.id}`);
  }
}
