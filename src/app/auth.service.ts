import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InfoSnackService } from './info-snack.service';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  notification: string;
  errorCode: string;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private info: InfoSnackService)  {
    this.user$ = afAuth.authState;
   }

   googleLogin() {
     let returnUrl: string;
     returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl', returnUrl);
     this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }
   googleLogout() {
     this.afAuth.auth.signOut();
     this.router.navigate(['/login']);
   }

   createAccount(userEmail: string, userPassword: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .catch( error => {
      this.errorCode = error.code;
    })
    .then(() => {
      if (this.errorCode === 'auth/email-already-in-use') {
        this.notification = 'Cet email est deja enregistré sur OKZ';
          this.info.displayInfo();
      } else {
        console.log(this.errorCode);
        this.notification = this.errorCode;
          this.info.displayInfo();
      }
    }) ;
   }
}
