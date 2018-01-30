import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServices } from '../../services/note.services';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  note = {};
  id = null;
  show = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NoteServices) {
    this.id = navParams.get('id');
    if (this.id ==0){

    }else{
      noteService.getDetalle(this.id)
        .subscribe( note=>{
          this.note = note;
        })
      

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  nuevanota(){
    if (this.id !=0){
      this.noteService.editarnota(this.note);
      alert('Datos actualizados');
    }else{
      this.noteService.createnote(this.note);
      alert('Usuario registrado');
    }
    this.navCtrl.pop();
  }

  eliminarusuario(){
    if(this.id!=0){
      this.noteService.eliminarusuario(this.note);
      alert('Usuario eliminado');
      this.show = false;
    }
    this.navCtrl.pop();
  }

}
