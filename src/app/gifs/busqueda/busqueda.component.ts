import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

//Recupera el elemento del html con el id txtBuscar y se lo asigna a una variable 
//!sirve para asegurar que no va a ser nulo
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;


  //Creamos una propiedad privada con el tipo de dato del servicio y ahora tenemos acceso a todo lo del service
  constructor(private giftService:GifsService){

  }

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    //no guarda los valores vacios
    if (valor.trim().length==0) {
      return;
    }

    this.giftService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value='';
    

  }

  

}
