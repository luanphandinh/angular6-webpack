import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { ExampleComponent } from './components/component-example/example.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent, ExampleComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
