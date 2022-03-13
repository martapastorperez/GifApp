import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';



@Injectable({
  //No hace falta declararlo en el modulo porque esta sentencia hace que sea global
  providedIn: 'root'
})
export class GifsService {

private apiKey:string='uBDpcpXTnpDNCT62OJnL1zPm6qyOekGl';
private servicioUrl:string='https://api.giphy.com/v1/gifs';
private _historial:string[]=[];
public resultados: Gif[]=[];


get historial(){

  return [...this._historial];
}

constructor(private http:HttpClient){

 
    this._historial= JSON.parse(localStorage.getItem('historial')!)||[];
    
  

  
    this.resultados= JSON.parse(localStorage.getItem('resultados')!)||[];
    
  
 

}

buscarGifs(query:string){

  query=query.trim().toLocaleLowerCase();

  //includes verifica si lo que añadamos en el historial incluye el query
  if (!this._historial.includes(query)) {
    //unshift agrega al principio nuevos elementos en el array y devuelve la longitud nueva del arrray
    this._historial.unshift(query);
    //splice sirve para arrays el primera parametro indica la posicion el segundo a partir de cual se desea eliminar y el tercero paraagregar
    this._historial=this._historial.splice(0,10);

    //grabar en el localstorage, stringify convierte cualquier objeto en un string
    localStorage.setItem('historial', JSON.stringify(this._historial));

    
    
  }

  const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit', '10')
    .set('q',query);
  

  this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?`,{params})
  .subscribe((resp)=>{
    this.resultados=resp.data;

    localStorage.setItem('resultados', JSON.stringify(this.resultados));

    
  });



}

}
