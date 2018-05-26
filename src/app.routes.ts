import { Routes } from '@angular/router';
import { MainPageComponent } from './app/components/main-page/main-page.component';
import { ExplorePageComponent } from './app/components/explore-page/explore-page.component';
import { MovieDetailResolver } from './app/components/movie-detail/movie-detail-resolver';
import { MovieDetailComponent } from './app/components/movie-detail/movie-detail.component';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      {
        path: 'app',
        component:  MainPageComponent,
        children: [
          { path: '', redirectTo: 'explore', pathMatch: 'full' },
          { path: 'explore', component: ExplorePageComponent },
          {
            path: 'movie/:id',
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
