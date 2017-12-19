import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-ads',
  templateUrl: './latest-ads.component.html',
  styleUrls: ['./latest-ads.component.css']
})
export class LatestAdsComponent implements OnInit {
  adInfo: any[] = [0, 1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
  }

}
