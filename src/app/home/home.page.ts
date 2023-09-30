import { Component } from '@angular/core';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private servicio : ServicioService) {}

  mensaje : string = '';
  onServicio(){
    this.servicio.setMensaje(this.mensaje);
    
  } 

}
