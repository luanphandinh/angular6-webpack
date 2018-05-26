import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[go1ViewItemHost]',
})
export class Go1ViewItemDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
