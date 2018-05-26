import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EllipsisModule } from 'ngx-ellipsis';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Go1CardComponent } from './card-view/go1-card.component';
import { Go1GridComponent } from './go1-grid/go1-grid.component';
import { Go1ViewItemComponent } from './go1-view-item/go1-view-item.component';
import { Go1ViewItemDirective } from './go1-view-item/go1-view-item.directive';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    EllipsisModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Go1GridComponent,
    Go1ViewItemComponent,
    Go1ViewItemDirective,
    Go1CardComponent,
  ],
  exports: [
    Go1GridComponent,
    Go1CardComponent,
  ],
})
export class CommonComponentsModule { }
