import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
