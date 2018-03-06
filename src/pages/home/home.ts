import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
      public formBuilder: FormBuilder) {

  }

}
