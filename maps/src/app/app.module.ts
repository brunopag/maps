import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Angular Google Maps (angular-maps.com)
import { AgmCoreModule } from '@agm/core';

// Imports para Info Windows de los marcadores
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

// Servicio de mapas
import {MapsService} from './services/maps.service';

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
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
