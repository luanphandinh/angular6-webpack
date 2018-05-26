import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EllipsisModule } from 'ngx-ellipsis';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonCardViewComponent } from './card-view/common-card.component';
import { GridComponent } from './grid/grid.component';
import { GridViewItemComponent } from './grid-view-item/grid-view-item.component';
import { GridViewItemDirective } from './grid-view-item/grid-view-item.directive';
import { CommonSearchComponent } from './common-search/common-search.component';

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
    GridComponent,
    GridViewItemComponent,
    GridViewItemDirective,
    CommonCardViewComponent,
    CommonSearchComponent,
  ],
  exports: [
    GridComponent,
    CommonCardViewComponent,
    CommonSearchComponent,
  ],
})
export class CommonComponentsModule { }
