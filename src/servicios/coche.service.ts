import { Injectable } from '@angular/core';

import { Coche } from '../modelos/coche';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CochesService {

    private cochesRef:AngularFireList<any>;

    constructor(private db: AngularFireDatabase) {
        this.cochesRef = this.db.list<Coche>('/coches');
    }

    getCoches(): Observable<Coche[]> {
        return this.cochesRef.snapshotChanges().map((arr) => {
            return arr.map((snap) => Object.assign(snap.payload.val(), { key: snap.key }) );
          });
    }

    insertarCoche(coche:Coche) {
        this.cochesRef.push(coche);
    }

    actualizaCoche(coche:Coche) {
        this.cochesRef.update(coche.key, coche);
    }

    eliminarCoche(coche:Coche) {
        this.cochesRef.remove(coche.key);
    }


}