import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[lupaGridItemHost]',
})
export class GridItemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
