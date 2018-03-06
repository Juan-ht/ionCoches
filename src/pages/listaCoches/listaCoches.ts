import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Coche } from '../../modelos/coche';
import { CochesService } from '../../servicios/coche.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lista-Coches',
  templateUrl: 'listaCoches.html'
})
export class ListaCoches {

  coches:Observable<Coche[]>;
  listaCoches = new Array<Coche>();
  

  constructor(public navCtrl: NavController, private cochesService:CochesService) {
    this.coches = this.cochesService.getCoches();
  }


  eliminarCoche(coche: Coche) {
    this.cochesService.eliminarCoche(coche);
    
  }

}
