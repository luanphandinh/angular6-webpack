import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/movie-app/app.module';

if (process.env.ENV === 'productions') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
