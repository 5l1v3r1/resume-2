import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Resume } from './../../models/resume';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  public getResume(): FirebaseListObservable<Resume[]> {
    return this.db.list('resume');
  }


}
