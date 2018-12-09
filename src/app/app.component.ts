import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectUAS';
  ngOnInit() {
    //Firebase Config
    const config = {
      apiKey: "AIzaSyC33Xjq8IV2ew7-ZmNI4hQ4nqcZp8Krj8k",
      authDomain: "projectakhir-f0a63.firebaseapp.com",
      databaseURL: "https://projectakhir-f0a63.firebaseio.com",
      projectId: "projectakhir-f0a63",
      storageBucket: "projectakhir-f0a63.appspot.com",
      messagingSenderId: "545730952057"
    };
    firebase.initializeApp(config);

  }


}
