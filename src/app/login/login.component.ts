import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms/src/model';
import { InfoSnackService } from './../info-snack.service';
import { AuthGuardService } from './../auth-guard.service';
import { AuthService } from './../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  notification: string;

  constructor(private authService: AuthService, private infoSnackService: InfoSnackService) { }

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


  emailLogin(data: FormArray) {
    sessionStorage.setItem('notification', 'Veillez patienter svp...');
    this.email = data.value.email;
    this.password = data.value.password;
    this.authService.emailLogin(this.email, this.password)
    .catch( error => {
      console.log(error);
      switch ( error.code ) {
        case 'auth/wrong-password':
        this.notification = 'Ce mot de passe est incorrect ou Essayez de vous connecter avec Google ou Facebook';
        break;
        case 'auth/network-request-failed':
        this.notification = 'Erreur de connection: verifiez que vous etes bien connecté a internet.';
        break;
        case 'vauth/invalid-email':
        this.notification = 'Votre address email incorrecte.';
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
