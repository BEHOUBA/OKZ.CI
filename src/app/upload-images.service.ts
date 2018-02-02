import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { storage } from 'firebase/app';

@Injectable()
export class UploadImagesService {
  ImageUrl: string;

  constructor() { }

  cancelImage(fileName: string, userName: string, adId: number){
    var storageRef = firebase.storage().ref('/Photos/'+ userName + '/' + adId + '/' + fileName);
    storageRef.delete();
  }

  upload(file: File, userName: string, adId: number){
    var storageRef = firebase.storage().ref('/Photos/'+ userName + '/' + adId + '/' + file.name);
    return storageRef.put(file).then((snapshot) => {
      this.ImageUrl = snapshot.downloadURL;
    });
}
}