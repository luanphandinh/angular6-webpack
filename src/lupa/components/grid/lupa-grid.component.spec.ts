import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { GridComponent } from 'app/components/common/grid/grid.component';
import { GridViewItemComponent } from 'app/components/common/grid-view-item/grid-view-item.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfiniteScrollModule, FormsModule],
      declarations: [GridComponent, GridViewItemComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
