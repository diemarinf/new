import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent  implements OnInit {

  constructor( private mensajeServicio: ServicioService) { 
  }

  mensaje:string='';

  ngOnInit() {
    this.mensajeServicio.getMensaje().subscribe((mensaje:string) => {
      this.mensaje = mensaje;
    });
  }

}
