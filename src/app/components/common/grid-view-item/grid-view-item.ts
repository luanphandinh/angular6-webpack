import { Type } from '@angular/core';

export class GridViewItem {
  constructor(public component: Type<any>, public data: any) {}
}
