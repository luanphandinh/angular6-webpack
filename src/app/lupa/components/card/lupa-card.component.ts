import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lupa-card',
  templateUrl: './lupa-card.component.html',
  styleUrls: ['./lupa-card.component.scss'],
})
export class CardComponent implements OnInit {
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
