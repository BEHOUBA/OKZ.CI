import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(private authService: AuthService, private route: Router, private aRoute: ActivatedRoute) {
    authService.user$.subscribe( user => {
      const currentUrl = this.route.url;
      const returnUrl = sessionStorage.getItem('returnUrl') || '';
      console.log(currentUrl);
      console.log(returnUrl);
      if (user && returnUrl) {
        route.navigateByUrl(returnUrl);
      } else if ( user && currentUrl === '/register') {
        route.navigate(['']);
      }
    });
   }
}
