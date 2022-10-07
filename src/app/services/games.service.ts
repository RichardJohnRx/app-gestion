import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _afs: AngularFirestore) { }

  getInfoWURL(url: string){
    return this._afs.collection('games').doc(url).get().pipe(
      map( (doc) => {
        return doc.data();
      })
    )
  }
}
