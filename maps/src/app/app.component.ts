import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variables que controlan latitud, longitud y zoom, las cuales se toman desde la vista html usando []
  lat: number = -32.9443021;
  lng: number = -60.6728199;
  zoom: number = 16;

}
