import { Component , ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteServices } from '../../services/note.services';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController , public notesServices : NoteServices) {
    notesServices.getNotes()
      .subscribe( notas=>{
          this.notes = notas;
        }
      );
  }

  public detalle(id){
    this.navCtrl.push(DetallePage ,{id:id});
  }

  public createnote(){
    this.navCtrl.push(DetallePage, {id:0});
  }
}
