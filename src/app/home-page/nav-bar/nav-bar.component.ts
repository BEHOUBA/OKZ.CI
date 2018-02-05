import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { InfoSnackService } from './../../info-snack.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  notification: string;


  constructor(public authService: AuthService, private infoSnackService: InfoSnackService) { }



  logOut() {
    this.authService.logOut();
    this.notification = 'Vous etes deconnecté. A très bientot sur OKZ.';
    this.infoSnackService.displayInfo();
    sessionStorage.setItem('notification', 'Veillez vous connecter.');
  }
}
