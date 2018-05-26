import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { GridViewItemComponent } from './grid-view-item.component';
import { GridViewItem } from './grid-view-item';
import { GridViewItemDirective } from './grid-view-item.directive';

@Component({
  selector: 'go1-testing-component',
  template: '<div></div>',
})
class TestingComponent {}
@NgModule({
  declarations: [TestingComponent],
  imports: [BrowserDynamicTestingModule],
  entryComponents: [TestingComponent],
  exports: [TestingComponent]
})
class TestingModule {
}

describe('GridViewItemComponent', () => {
  let component: GridViewItemComponent;
  let fixture: ComponentFixture<GridViewItemComponent>;
  const viewContainerRef = {clear: () => {}, createComponent: () => ({instance: {}})} as any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TestingModule],
      declarations: [ GridViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewItemComponent);
    component = fixture.componentInstance;
    component.item = new GridViewItem(TestingComponent, {'key': 'value'});
    component.layout = 'grid';
    component.go1ViewItemHost = new GridViewItemDirective(viewContainerRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
