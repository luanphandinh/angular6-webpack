import { Component, Input, ViewChild, OnInit, ComponentFactoryResolver } from '@angular/core';

import { Go1ViewItem } from './go1-view-item';
import { Go1ViewItemDirective } from './go1-view-item.directive';
import { Go1ViewComponentInterface } from './go1-view-component-interface';

@Component({
  selector: 'go1-view-item',
  template: `
    <ng-template go1ViewItemHost></ng-template>
  `,
})
export class Go1ViewItemComponent implements OnInit {
  @Input() item: Go1ViewItem;
  @Input() layout: string;
  @ViewChild(Go1ViewItemDirective) go1ViewItemHost: Go1ViewItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.item.component);

    const viewContainerRef = this.go1ViewItemHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<Go1ViewComponentInterface>componentRef.instance).data = this.item.data;
    (<Go1ViewComponentInterface>componentRef.instance).layout = this.layout;
  }

}
