import { Experience } from './models/experience';
import { FirebaseService } from './services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ReversePipe } from './pipes/reverse.pipe';
import { Resume } from './models/resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public resume: Resume;
  constructor(public firebaseService: FirebaseService, public snackBar: MdSnackBar) {}

  ngOnInit() {
    this.firebaseService.getResume().subscribe(data => {
      this.resume = data[0];
    });

    // // listen to the service worker promise in index.html to see if there has been a new update.
    // // condition: the service-worker.js needs to have some kind of change - e.g. increment CACHE_VERSION.
    // window['isUpdateAvailable'].then(isAvailable => {
    //   if (isAvailable) {
    //     this.snackBar.open('New Update available!', 'Update', {
    //       duration: 2000,
    //     }).onAction().subscribe(() => {
    //       console.log('yes update');
    //     });
    //   } else {
    //     console.log('update not available');
    //   }
    // });
  }
}
