import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go1-card',
  templateUrl: './go1-card.component.html',
  styleUrls: ['./go1-card.component.scss'],
})
export class Go1CardComponent implements OnInit {
  @Input() image?: string;
  @Input() overview?: string;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() supportingText?: any;
  @Input() cardObject?: any;
  @Input() isHover?: boolean;

  @Output() clickCard = new EventEmitter<CardEvent>();

  constructor() { }

  ngOnInit() {
  }

  onClickCard() {
    this.clickCard.emit({ data: this.cardObject });
  }

  getBackgroundImageStyle() {
    return {
      backgroundImage: this.image ? `url('${this.image}')` : 'none',
    };
  }

}

export interface CardEvent {
  data: any;
}
