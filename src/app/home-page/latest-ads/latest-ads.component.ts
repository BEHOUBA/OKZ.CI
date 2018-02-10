import { Component, OnInit } from '@angular/core';
import { GetAdsService } from './../../get-ads.service';

@Component({
  selector: 'app-latest-ads',
  templateUrl: './latest-ads.component.html',
  styleUrls: ['./latest-ads.component.css']
})
export class LatestAdsComponent implements OnInit {
  ads$;
  constructor(private getAdsService: GetAdsService) {
    this.ads$ = this.getAdsService.getAll(5);
   }

  ngOnInit() {
  }

}
