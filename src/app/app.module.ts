import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { MainMapComponent } from './main-map/main-map.component';
import { HeaderComponent } from './header/header.component';
import { DirectionsFormComponent } from './main-map/directions-form/directions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    HeaderComponent,
    DirectionsFormComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
