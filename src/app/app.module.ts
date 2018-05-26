import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { CommonComponentsModule } from './components/common/common-components.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { MovieService } from './services/movie.service';
import { ExploreService } from './services/explore.service';

import { appRoutes } from '../app.routes';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { APP_BASE_HREF } from '@angular/common';
import { MovieDetailResolver } from './components/movie-detail/movie-detail-resolver';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { TopCastListComponent } from './components/movie-detail/caster/top-cast-list.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsComponent } from './components/movie-detail/reviews/reviews.component';

import '../assets/css/global.css';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonComponentsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
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
  ],
})
export class AppModule { }
