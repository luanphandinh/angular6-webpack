import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { GridItemComponent } from './grid-item.component';
import { GridItem } from './grid-item';
import { GridItemDirective } from './grid-item.directive';

@Component({
  selector: 'lupa-testing-component',
  template: '<div></div>',
})
class TestingComponent { }
@NgModule({
  declarations: [TestingComponent],
  imports: [BrowserDynamicTestingModule],
  entryComponents: [TestingComponent],
  exports: [TestingComponent],
})
class TestingModule {
}

describe('GridViewItemComponent', () => {
  let component: GridItemComponent;
  let fixture: ComponentFixture<GridItemComponent>;
  const viewContainerRef = { clear: () => { }, createComponent: () => ({ instance: {} }) } as any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GridItemComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemComponent);
    component = fixture.componentInstance;
    component.item = new GridItem(TestingComponent, { key: 'value' });
    component.layout = 'grid';
    component.lupaGridItemHost = new GridItemDirective(viewContainerRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
