import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Resume } from './../../models/resume';
import { Firebase } from './firebase.model';

@Injectable()
export class FirebaseService implements Firebase {

  constructor(private db: AngularFireDatabase) { }

  public getResume(): FirebaseListObservable<Resume[]> {
    return this.db.list('resume');
  }
}
