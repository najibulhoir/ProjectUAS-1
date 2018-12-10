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
      apiKey: "AIzaSyBt1A74LunhMW52sDEBrYW8SCxUbM2CtAM",
      authDomain: "projectuas-3a6c4.firebaseapp.com",
      databaseURL: "https://projectuas-3a6c4.firebaseio.com",
      projectId: "projectuas-3a6c4",
      storageBucket: "projectuas-3a6c4.appspot.com",
      messagingSenderId: "528874992378"
    };
    firebase.initializeApp(config);

  }


}
