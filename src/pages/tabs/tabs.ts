import { Component } from '@angular/core';

import { Formulario } from '../formulario/formulario';
import { ListaCoches } from '../listaCoches/listaCoches';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Formulario;
  tab3Root = ListaCoches;

  constructor() {

  }
}
