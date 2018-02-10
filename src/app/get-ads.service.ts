import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Advert } from './advert';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GetAdsService {


  constructor(private db: AngularFireDatabase) {
  }

  getAll(num?: number) {
   return num ?
   this.db.list('/Adverts',  ad => ad.orderByKey().limitToFirst(num)).valueChanges() :
   this.db.list('/Adverts', ad => ad.orderByKey()).valueChanges();
  }

}
