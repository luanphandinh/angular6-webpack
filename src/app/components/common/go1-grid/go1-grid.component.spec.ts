import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { Go1GridComponent } from './go1-grid.component';
import { Go1ViewItemComponent } from '../go1-view-item/go1-view-item.component';

describe('Go1GridComponent', () => {
  let component: Go1GridComponent;
  let fixture: ComponentFixture<Go1GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ InfiniteScrollModule, FormsModule ],
      declarations: [ Go1GridComponent, Go1ViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Go1GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
