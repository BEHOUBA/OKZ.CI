import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormArray } from '@angular/forms/src/model';
import * as firebase from 'firebase';
import { InfoSnackService } from './../info-snack.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  email: string;
  password: string;
  notification: string;
  displayName: string;
  phoneNumber: string;
  user$: firebase.User;

  constructor(private authService: AuthService, private infoSnackService: InfoSnackService, private route: ActivatedRoute) { }

  createAccount(data: FormArray) {
    sessionStorage.setItem('notification', 'Veillez patienter svp...');
    this.notification = this.authService.notification || 'Veillez reessayer s\'l vous plait';
    this.email = data.value.email;
    this.password = data.value.password;
    this.displayName = data.value.displayName;
    this.phoneNumber = data.value.phoneNumber;
    this.authService.createAccount(this.email, this.password)
    .then( user => {
      user.updateProfile({
        displayName: this.displayName,
        phoneNumber: this.phoneNumber,
      });
      console.log(user);
    }).then( ( ) => {
      console.log('compte crée avec succes.');
    }, (error) => {
      console.log(error);
      switch ( error.code ) {
        case 'auth/invalid-email':
        this.notification = 'Cette address email est desactivé';
        break;
        case 'auth/email-already-in-use':
        this.notification = 'Ce compte existe deja';
        break;
        default:
        this.notification = error.message;
        break;
      }
      this.infoSnackService.displayInfo();

    });
  }


  googleLogin() {
    sessionStorage.setItem('notification', 'Veillez patienter svp...');
    this.authService.googleLogin()
    .then(user => {
      console.log(user);
    }, error => {
      switch ( error.code ) {
        case 'auth/network-request-failed':
        this.notification = 'Erreur de connection: verifiez que vous etes bien connecté a internet.';
        break;
        default:
      }
      this.infoSnackService.displayInfo();
    }).catch( error => {
      if (!error) {
        this.notification = 'Connexion en cours...';
        this.infoSnackService.displayInfo();
      }
    });
  }


  facebookLogin() {
    sessionStorage.setItem('notification', 'Veillez patienter svp...');
    this.authService.facebookLogin()
    .then( data => {
      console.log(data);
    }, error => {
      switch ( error.code ) {
        case 'auth/network-request-failed':
        this.notification = 'Erreur de connection: verifiez que vous etes bien connecté a internet.';
        break;
        default:
        this.notification = error.message;
      }
      this.infoSnackService.displayInfo();
    });
  }

  ngOnInit() {
    const user = firebase.auth().currentUser;
    const storage = sessionStorage.getItem('notification');
    console.log(storage);
    if (storage === 'Veillez patienter svp...') {
      this.notification = sessionStorage.getItem('notification');
      this.infoSnackService.displayInfo();
    } else if (!user) {
      this.notification = 'Veillez vous connecter.';
      this.infoSnackService.displayInfo();
    }
  }
}
