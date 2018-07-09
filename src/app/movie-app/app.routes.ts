import { Routes } from '@angular/router';
import { MainPageComponent } from 'app/movie-app/components/main-page/main-page.component';
import { ExplorePageComponent } from 'app/movie-app/components/explore-page/explore-page.component';
import { MovieDetailResolver } from 'app/movie-app/components/movie-detail/movie-detail-resolver';
import { MovieDetailComponent } from 'app/movie-app/components/movie-detail/movie-detail.component';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      {
        path: 'app',
        component:  MainPageComponent,
        children: [
          { path: '', redirectTo: 'explore/movie', pathMatch: 'full' },
          {
            path: 'explore/:type',
            component: ExplorePageComponent,
          },
          {
            path: 'detail/:type/:id',
            resolve: {
              movie: MovieDetailResolver,
            },
            component: MovieDetailComponent,
          },
        ],
      },
    ],
  },
];
