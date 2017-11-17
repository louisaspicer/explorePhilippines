import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';


import { AppComponent } from './app.component';
import { MainMapComponent } from './main-map/main-map.component';
import { HeaderComponent } from './header/header.component';
import { DirectionsFormComponent } from './main-map/directions-form/directions-form.component';
import { DirectionsMapDirective } from './directives/google-maps-directions.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    HeaderComponent,
    DirectionsFormComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBgEYCo_2uuEJGfTMwv432Kah-sNbn3Ek',
      libraries: ['places']
    })
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
