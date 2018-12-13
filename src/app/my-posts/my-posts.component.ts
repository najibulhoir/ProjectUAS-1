import { Component, OnInit } from '@angular/core';
import {MyFireService} from '../shared/myfire.service';
import {NotificationService} from '../shared/notification.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor(private myFire: MyFireService,
              private notifier: NotificationService
              ) { }

  ngOnInit() {
  }

  onFileSelection(event){
    const fileList: FileList = event.target.files;

    if (fileList.length > 0){
      const file: File = fileList[0];
      this.myFire.uploadFile(file)
        .then(data => {
          this.notifier.display('success','Picture Uploaded!');
          // this.myFire.handleImageUpload(data);
          // console.log(data['fileUrl']);
        })
        .catch(err => {
          this.notifier.display('error', err.message);
          console.log(err);
        });
    }
  }

  ngOnDestroy() {

  }

}
