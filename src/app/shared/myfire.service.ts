import * as firebase from 'firebase/app';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';




@Injectable()
export class MyFireService {

  constructor(private user: UserService){

  }

  getUserFromDatabase(uid){

    const ref = firebase.database().ref('users/' + uid);
    return ref.once('value')
      .then(snapshot => snapshot.val());

  }

  generateRandomNme(){
    let text ="";
    const  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i=0; i < 5; i++){
      text += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return text;
  }

  uploadFile(file){
    const  fileName = this.generateRandomNme();
    const fileRef = firebase.storage().ref().child('image/' + file.name);
    const uploadTask = fileRef.put(file);

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', snapshot => {
        }, error => {
        reject(error);

        }, () => {
          const  fileUrl = uploadTask.snapshot.downloadURL;
          resolve({fileName, fileUrl});
        }
      );
    })


  }

  handleImageUpload(data){
    const user = this.user.getProfile();



    const newPersonalPostKey = firebase.database().ref().child('myposts/').push().key;
    // newPersonalPostKey.set({
    //   fileUrl: data.fileUrl,
    //   name: data.fileName,
    //   creationDate: new Date().toString()
    // });
    const personalPostDetails = {
      fileUrl: data.fileUrl,
      name: data.fileName,
      creationDate: new Date().toString()
    };


    const updates = {};
    updates['/myposts/' + user.uid + "/" + newPersonalPostKey] = personalPostDetails;

    return firebase.database().ref().update(updates);
  }


}
