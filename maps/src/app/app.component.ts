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

  marcadorSel:any = null;

  draggable:string = "1";

  constructor(public _mapsService:MapsService){
    // Obtiene los marcadores del localStorage
    _mapsService.cargarMarcadores();
  }

  clickMapa( evento ){
    // el evento clickMapa se declara en el HTML. Se crea un objeto del tipo Marcador y se agrega al arreglo guardado en el localStorage
    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      draggable: true,
      titulo: "Nuevo Marcador"
    }

    this._mapsService.agregarMarcador(nuevoMarcador);

    console.log(evento);
  }

  clickMarcador(marcador:Marcador, i:number){
    this.marcadorSel = marcador;
    if(this.marcadorSel.draggable){
      this.draggable = "1"
    } else{
      this.draggable = "0"
    }
  }

  dragEndMarcador(marcador:Marcador, event){
    // Objeto definido por AGM y redefinido por nostros. Se acrualizan las coordenadas y guarda.
    // Se recibe un marcador del array, por eso al modificarlo se esta modificando ese marcador del array y solo basta
    // guardar el array en el localStorage para persistirlo
    marcador.lat = event.coords.lat;
    marcador.lng = event.coords.lng;
    this._mapsService.guardarMarcadores();
  }

  borrarMarcador(idx:number){
    this._mapsService.borrarMarcador(idx);
    this.marcadorSel = null;
  }

  cambiarDraggable(){
    if(this.draggable == "1"){
      this.marcadorSel.draggable = true;
    }else{
      this.marcadorSel.draggable = false;
    }
  }

}
