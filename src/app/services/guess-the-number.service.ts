import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GuessTheNumberService {

  constructor(private _afs: AngularFirestore) {
  }

  getInfo() {
    return this._afs.collection('games').doc('guessthenumber').get().pipe(
      map((doc) => {
        return doc.data();
      })
    )

  }

  setScore(scoreInfo: any) {
    return this._afs.collection('games').doc('guessthenumber').collection('scores').add(scoreInfo);

  }
}
