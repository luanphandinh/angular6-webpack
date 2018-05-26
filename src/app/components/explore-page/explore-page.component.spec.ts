import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonComponentsModule } from 'app/components/common/common-components.module';
import { GatewayService } from 'app/services/gateway.service';
import { ExplorePageComponent } from 'app/components/explore-page/explore-page.component';

describe('ExplorePageComponent', () => {
  let component: ExplorePageComponent;
  let fixture: ComponentFixture<ExplorePageComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        CommonComponentsModule,
        HttpClientModule,
      ],
      providers: [
        GatewayService,
      ],
      declarations: [
        ExplorePageComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component, 'fetchMovies');
    expect(component).toBeTruthy();
  });

  it('should call fetchCourses', () => {
    spyOn(component, 'fetchMovies');
    component.ngOnInit();
    expect(component.fetchMovies).toHaveBeenCalled();
  });
});
