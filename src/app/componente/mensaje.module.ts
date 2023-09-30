import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MensajeComponent } from './mensaje.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    MensajeModule
  ],
  exports: [
    MensajeComponent
  ]
})
export class MensajeModule { 
}
