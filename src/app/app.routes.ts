import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { MovieDetailResolver } from './components/movie-detail/movie-detail-resolver';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

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
