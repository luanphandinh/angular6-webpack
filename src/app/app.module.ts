import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';
import { CommonComponentsModule } from 'app/components/common/common-components.module';
import { MovieCardComponent } from 'app/components/movie-card/movie-card.component';
import { ExplorePageComponent } from 'app/components/explore-page/explore-page.component';
import { MovieService } from 'app/services/movie.service';
import { ExploreService } from 'app/services/explore.service';

import { appRoutes } from 'app/app.routes';
import { MainPageComponent } from 'app/components/main-page/main-page.component';
import { MovieDetailComponent } from 'app/components/movie-detail/movie-detail.component';
import { APP_BASE_HREF } from '@angular/common';
import { MovieDetailResolver } from 'app/components/movie-detail/movie-detail-resolver';
import { PeopleCardComponent } from 'app/components/people-card/people-card.component';
import { TopCastListComponent } from 'app/components/movie-detail/caster/top-cast-list.component';
import { ReviewComponent } from 'app/components/review/review.component';
import { ReviewsComponent } from 'app/components/movie-detail/reviews/reviews.component';
import { SearchBarComponent } from 'app/components/main-page/search-bar/search-bar.component';
import { NavigationBarComponent } from 'app/components/main-page/navigation-bar/navigation-bar.component';
import { TrailerComponent } from 'app/components/movie-detail/trailer/trailer.component';
import { SortComponent } from 'app/components/explore-page/sort/sort.component';
import { CommonFilterComponent } from 'app/components/explore-page/filter/filter.component';
import { ExploreFiltersComponent } from 'app/components/explore-page/filter/explore-filters.component';

import '../assets/css/global.scss';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonComponentsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    YoutubePlayerModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    MovieCardComponent,
    ExplorePageComponent,
    MainPageComponent,
    MovieDetailComponent,
    PeopleCardComponent,
    TopCastListComponent,
    ReviewComponent,
    ReviewsComponent,
    SearchBarComponent,
    NavigationBarComponent,
    TrailerComponent,
    SortComponent,
    CommonFilterComponent,
    ExploreFiltersComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    MovieService,
    ExploreService,
    MovieDetailResolver,
    {
      provide: APP_BASE_HREF,
      useValue: '/p',
    },
  ],
  entryComponents: [
    MovieCardComponent,
    ExplorePageComponent,
    TrailerComponent,
  ],
})
export class AppModule { }
