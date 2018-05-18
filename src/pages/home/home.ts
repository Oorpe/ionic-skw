import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    objectToEdit = {kissa: "siru", "koira": "hunni"};

    onChange = (thing)=>{
        this.objectToEdit = thing;
    }

  constructor(public navCtrl: NavController) {

  }

}
