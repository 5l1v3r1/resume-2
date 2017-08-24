import { Component, OnInit } from "@angular/core";
import { Resume } from "./models/resume";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public resume:FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.resume = this.db.list("/resume");
  }

  ngOnInit() {
    
  }
}
