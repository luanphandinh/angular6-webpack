import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'trailer',
  styleUrls: ['./trailer.component.css'],
  template: `
    <div class="modal-body">
      <div class="trailer-wrapper">
        <div class="trailer-video">
          <youtube-player
            [width]="width"
            [height]="height"
            [videoId]="key"
          ></youtube-player>
        </div>
      </div>
    </div>
  `,
})
export class TrailerComponent implements OnInit {
  @Input() key: string;
  @Input() height: string;
  @Input() width: string;

  constructor(
    public activeModal: NgbActiveModal,
  ) {
  }

  ngOnInit() {
  }
}
