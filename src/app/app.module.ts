import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/component-example/example.component';

import '../assets/css/styles.css';
import '../assets/css/global_styles.scss';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    ExampleComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
