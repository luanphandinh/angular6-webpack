import { Component, Input, ViewChild, OnInit, ComponentFactoryResolver } from '@angular/core';

import { GridItem } from './grid-item';
import { GridItemDirective } from './grid-item.directive';
import { GridItemComponentInterface } from './grid-item-component-interface';

@Component({
  selector: 'lupa-grid-item',
  template: `
    <ng-template lupaGridItemHost></ng-template>
  `,
})
export class GridItemComponent implements OnInit {
  @Input() item: GridItem;
  @Input() layout: string;
  @ViewChild(GridItemDirective) lupaGridItemHost: GridItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.item.component);

    const viewContainerRef = this.lupaGridItemHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<GridItemComponentInterface>componentRef.instance).data = this.item.data;
    (<GridItemComponentInterface>componentRef.instance).layout = this.layout;
  }

}
