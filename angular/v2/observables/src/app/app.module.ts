import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    DebounceClickDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
