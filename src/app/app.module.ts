import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonComponentsModule } from './components/common/common-components.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonComponentsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    MovieCardComponent,
    ExplorePageComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    MovieCardComponent,
    ExplorePageComponent,
  ],
})
export class AppModule { }
