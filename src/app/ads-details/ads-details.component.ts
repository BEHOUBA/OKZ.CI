import { Component, OnInit } from '@angular/core';
import { GetAdsService } from './../get-ads.service';
import { Advert } from '../advert';
import { Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {
  ad;
  imgUrls: string[];
  adInfo: any[] = [0, 1, 2, 3, 4, 5, 6, 7];
  lat = 49.516086;
  lng =  0.162333;
  ratingStars = [true, true, true, true, false];

  constructor(private getAdsService: GetAdsService, router: Router ) {
    const id = router.url.split('/')[2];
    getAdsService.getAd(id).valueChanges().take(1).subscribe( p => {
      this.ad = p;
      console.log(this.ad);
    });
   }

  timer = setInterval(function(){
    const time = new Date().toLocaleTimeString() ;
    const btnTimer = document.getElementById('btn-timer');
    if (btnTimer) {
      btnTimer.innerText = time;
    }
  }, 1000);


  addToFavorite() {
    const isAdded =  document.getElementById('favorite');
    if (isAdded.style.color === 'yellow') {
      isAdded.style.color = 'rgb(59, 57, 57)';
    } else {
      isAdded.style.color = 'yellow';
    }
  }


  isLoaded(image) {
    image = String(image);
    const img = <HTMLInputElement>document.getElementById(image);
    const loader = <HTMLInputElement>document.getElementById('loader');
    const complet = img.complete;
    img.style.display = 'block';
    loader.style.display = 'none';
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
