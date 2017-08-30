import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Firebase } from '../services/firebase/index';

@Injectable()
export class FirebaseServiceMock implements Firebase {

  constructor() { }

  public getResume(): Observable<any> {
    return Observable.of({});
  }
}
