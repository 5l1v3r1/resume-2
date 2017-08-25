import { Experience } from './models/experience';
import { FirebaseService } from './services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ReversePipe } from './pipes/reverse.pipe';
import { Resume } from './models/resume';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public resume: Resume;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getResume().subscribe(
      data => {
        this.resume = data[0];
      }
    );
  }
}
