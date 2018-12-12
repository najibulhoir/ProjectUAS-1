import * as firebase from 'firebase/app';


export class MyFireService {

  getUserFromDatabase(uid){

    const ref = firebase.database().ref('users/' + uid);
    return ref.once('value')
      .then(snapshot => snapshot.val());

  }

  generateRandomNme(){
    let text ="";
    const  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

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

}
