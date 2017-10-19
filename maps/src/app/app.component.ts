import { Component } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Marcador } from './interfaces/marcador.interfase';

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

  constructor(public _mapsService:MapsService){

  }

  clickMapa( evento ){
    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      draggable: true,
      titulo: "Nuevo Marcador"
    }

    this._mapsService.agregarMarcador(nuevoMarcador);
    
    console.log(evento);
  }

}
