import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {
  timer = setInterval(function(){
    const time = new Date().toLocaleTimeString() ;
    document.getElementById('btn-timer').innerText = time;
  }, 1000);

  lat = 49.516086;
  lng =  0.162333;
  ratingStars = [true, true, true, true, false];
  imgUrls = [
    'https://static.pexels.com/photos/714696/pexels-photo-714696.jpeg',
    'https://static.pexels.com/photos/249324/pexels-photo-249324.jpeg',
    'https://static.pexels.com/photos/163096/ios-new-mobile-gadget-163096.jpeg',
    'https://static.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg',
    'https://static.pexels.com/photos/206434/pexels-photo-206434.jpeg'
  ];
  addToFavorite() {
    const isAdded =  document.getElementById('favorite');
    if (isAdded.style.color === 'yellow') {
      isAdded.style.color = 'rgb(59, 57, 57)';
    } else {
      isAdded.style.color = 'yellow';
    }
  }


  isLoaded(image){
    image = String(image);
    const img = <HTMLInputElement>document.getElementById(image);
    const loader = <HTMLInputElement>document.getElementById('loader');
    const complet = img.complete;
    img.style.display = 'block';
    loader.style.display = 'none';
  }
  constructor() { }

  ngOnInit() {}

}
