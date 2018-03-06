import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Coche } from '../../modelos/coche';
import { CochesService } from '../../servicios/coche.service';

@Component({
  selector: 'formulario',
  templateUrl: 'formulario.html'
})
export class Formulario {

  coches: Observable<Coche[]>;
  marca:string;
  modelo:string;
  color:string;
  matricula:string;
  expresionRegular:RegExp = /\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;

  constructor(public navCtrl: NavController, private cocheService:CochesService, 
  public toastCtrl: ToastController) {
    this.coches = this.cocheService.getCoches();

  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Coche creado con éxito',
      duration: 2000,
      position: position
    });

    toast.present(toast);
}

  nuevoCoche(){
    if(this.expresionRegular.test(this.matricula) && this.marca !== '' && this.modelo !== '' && this.color!== '' ){
      this.cocheService.insertarCoche({marca: this.marca, modelo: this.modelo, 
                                       color: this.color, matricula: this.matricula, 
                                       estado: true});
    }
  }

  

}
