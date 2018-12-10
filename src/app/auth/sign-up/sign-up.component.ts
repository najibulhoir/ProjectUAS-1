import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import firestore from 'firebase/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const fullname = form.value.fullname;
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userData => {
        firebase.auth().currentUser.sendEmailVerification();

         firebase.database().ref('/users' + userData.user.uid).set({
          email: email,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
           fullname: fullname
        })
      .then(()=>{
          console.log(userData);
          firebase.auth().signOut();
        });
      })
      .catch(err =>{
        console.log(err);
      });
  }

}
