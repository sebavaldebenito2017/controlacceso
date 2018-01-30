import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NoteServices{

    constructor(public afDB: AngularFireDatabase){

    }

    notes=[
        {id:1, title:"Usuario 1", description:"Jefe de proyecto"},
        {id:2, title:"Usuario 2", description:"Analista"},
        {id:3, title:"Usuario 3", description:"Desarrollador java"},
        {id:4, title:"Usuario 4", description:"Gerente general"},
        {id:5, title:"Usuario 5", description:"Desarrollador senior"}
      ];
    
    public getNotes(){
        return this.afDB.list('usuarios/').valueChanges();
    }

    public getDetalle(id){
        return this.afDB.object('usuarios/'+id).valueChanges(); 
    }

    public createnote(note){
        note.id = Date.now();
        this.afDB.database.ref('usuarios/'+note.id).set(note);
    }

    public editarnota(note){
        this.afDB.database.ref('usuarios/'+note.id).set(note);
    }

    public eliminarusuario(note){
        this.afDB.database.ref('usuarios/'+note.id).remove();
    }
}