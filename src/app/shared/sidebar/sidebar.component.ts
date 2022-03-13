import { query } from '@angular/animations';
import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {


  //recuperamos el historial para llamarlo en el html
  get historial(){
    

    return this.giftService.historial;
    
    
    
  }

  constructor(private giftService:GifsService) { }

  buscar(termino:string){
    this.giftService.buscarGifs(termino);
  }
  
}
