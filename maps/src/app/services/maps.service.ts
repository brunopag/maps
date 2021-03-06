import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interfase';

@Injectable()
export class MapsService {

  marcadores:Marcador[] = [];

  constructor() {
    // Crear y agregar el primer marcador.
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
     // Guarda el arreglo de marcadores en el localStorage. Para guardarlo hay que pasarlo a string JSON antes
     localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
   }

   cargarMarcadores(){
     if (localStorage.getItem('marcadores')){
       // Para recuperarlo del localStorage hay que parsear el JSON para convertirlo en objeto.
       this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
     } else {
       this.marcadores = [];
     }
   }

   borrarMarcador(idx:number){
     this.marcadores.splice(idx,1);
     this.guardarMarcadores();
   }

}
