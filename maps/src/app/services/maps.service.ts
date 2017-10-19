import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interfase';

@Injectable()
export class MapsService {

  marcadores:Marcador[] = [];

  constructor() {
    let nuevoMarcador:Marcador = {
      lat:-32.9443021,
      lng:-60.6728199,
      draggable: true,
      titulo: "Casa"
    }

    this.marcadores.push(nuevoMarcador);
   }

   agregarMarcador(marcador:Marcador){
     this.marcadores.push(marcador);
     this.guardarMarcadores();
   }

   guardarMarcadores(){
     localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
   }

   cargarMarcadores(){
     if (localStorage.getItem('marcadores')){
       this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
     } else {
       this.marcadores = [];
     }
   }

}
