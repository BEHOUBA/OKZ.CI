import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InfoSnackService } from './info-snack.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  notification: string;
  errorCode: string;
  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,
    private route: ActivatedRoute, private router: Router, private info: InfoSnackService
  )  {
    this.user$ = afAuth.authState;
   }

   googleLogin() {
     let returnUrl: string;
     returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl', returnUrl);
     return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }

   facebookLogin() {
     return this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
   }

   logOut() {
     this.afAuth.auth.signOut();
     this.router.navigate(['/']);
   }

   createAccount(userEmail: string, userPassword: string) {
   return this.afAuth.auth.createUserWithEmailAndPassword(userEmail, userPassword);
   }

   emailLogin(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
   }




}
