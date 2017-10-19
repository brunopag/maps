import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Angular Google Maps (angular-maps.com)
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // Configurar Angular Google Maps con la API Key
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJarEWaHb_dF2OsBwfGY7Jyh3sDuwRX6c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
