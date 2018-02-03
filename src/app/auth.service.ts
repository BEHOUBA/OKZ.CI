import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router )  {
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
    this.afAuth.auth.createUserWithEmailAndPassword(userEmail, userPassword).catch( error => console.log(error)) ;
   }
}
