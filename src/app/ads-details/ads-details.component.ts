import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {

  imgUrls = [
    'https://static.pexels.com/photos/714696/pexels-photo-714696.jpeg',
    'https://static.pexels.com/photos/249324/pexels-photo-249324.jpeg',
    'https://static.pexels.com/photos/163096/ios-new-mobile-gadget-163096.jpeg',
    'https://static.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg',
    'https://static.pexels.com/photos/206434/pexels-photo-206434.jpeg'
  ];

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
