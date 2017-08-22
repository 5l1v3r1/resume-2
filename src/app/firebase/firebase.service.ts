import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {

  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) { }

}
