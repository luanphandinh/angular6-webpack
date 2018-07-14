import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EllipsisModule } from 'ngx-ellipsis';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardComponent } from './card/lupa-card.component';
import { GridComponent } from './grid/lupa-grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
import { GridItemDirective } from './grid/grid-item/grid-item.directive';
import { SearchBarComponent } from './search-bar/lupa-search-bar.component';

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
    GridItemComponent,
    GridItemDirective,
    CardComponent,
    SearchBarComponent,
  ],
  exports: [
    GridComponent,
    CardComponent,
    SearchBarComponent,
  ],
})
export class LupaComponentsModule { }
