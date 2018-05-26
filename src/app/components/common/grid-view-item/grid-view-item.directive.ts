import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[gridViewItemHost]',
})
export class GridViewItemDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
