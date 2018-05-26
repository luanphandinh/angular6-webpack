import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { Go1ViewItemComponent } from './go1-view-item.component';
import { Go1ViewItem } from './go1-view-item';
import { Go1ViewItemDirective } from './go1-view-item.directive';

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

describe('Go1ViewItemComponent', () => {
  let component: Go1ViewItemComponent;
  let fixture: ComponentFixture<Go1ViewItemComponent>;
  const viewContainerRef = {clear: () => {}, createComponent: () => ({instance: {}})} as any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TestingModule],
      declarations: [ Go1ViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Go1ViewItemComponent);
    component = fixture.componentInstance;
    component.item = new Go1ViewItem(TestingComponent, {'key': 'value'});
    component.layout = 'grid';
    component.go1ViewItemHost = new Go1ViewItemDirective(viewContainerRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
