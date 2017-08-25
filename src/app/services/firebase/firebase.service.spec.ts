import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';

class AngularFireDatabaseMock {
  list() { }
}

describe('FirebaseService', () => {
  let service: FirebaseService;
  let db: AngularFireDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirebaseService,
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock }
      ]
    });
    service = TestBed.get(FirebaseService);
    db = TestBed.get(AngularFireDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should call firebase when 'getresume()' is called`, () => {
    spyOn(db, 'list');
    service.getResume();
    expect(db.list).toHaveBeenCalled();
  });

});
