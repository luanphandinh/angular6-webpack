import { Component, Input, ViewChild, OnInit, ComponentFactoryResolver } from '@angular/core';

import { GridViewItem } from './grid-view-item';
import { GridViewItemDirective } from './grid-view-item.directive';
import { GridViewComponentInterface } from './grid-view-component-interface';

@Component({
  selector: 'go1-view-item',
  template: `
    <ng-template gridViewItemHost></ng-template>
  `,
})
export class GridViewItemComponent implements OnInit {
  @Input() item: GridViewItem;
  @Input() layout: string;
  @ViewChild(GridViewItemDirective) go1ViewItemHost: GridViewItemDirective;

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
    (<GridViewComponentInterface>componentRef.instance).data = this.item.data;
    (<GridViewComponentInterface>componentRef.instance).layout = this.layout;
  }

}
