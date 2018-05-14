import { TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';

describe('AppExample', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ExampleComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(ExampleComponent);
    expect(fixture.componentInstance instanceof ExampleComponent).toBe(true, 'should create ExampleComponent');
  });
});
