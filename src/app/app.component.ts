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
      const currentUrl = this.aRoute.snapshot.queryParamMap.get('returnUrl');
      const returnUrl = sessionStorage.getItem('returnUrl');
      if (user && currentUrl === returnUrl) {
        route.navigateByUrl(returnUrl);
      }
    });
   }
}
