import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AdvertService {

  constructor(private db: AngularFireDatabase) { }

  sentAdToFirebase(ad) {
    this.db.list('/Adverts').push(ad);
  }
}
