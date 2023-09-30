import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  public mensaje = new BehaviorSubject<string>('');
  setMensaje(mensaje:string){
    this.mensaje.next(mensaje);
    console.log(mensaje)
  }

  getMensaje(): any{
    return this.mensaje.asObservable();
  }


  constructor() { }



}
