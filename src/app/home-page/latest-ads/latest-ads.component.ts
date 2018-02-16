import { Component, OnInit } from '@angular/core';
import { GetAdsService } from './../../get-ads.service';

@Component({
  selector: 'app-latest-ads',
  templateUrl: './latest-ads.component.html',
  styleUrls: ['./latest-ads.component.css']
})
export class LatestAdsComponent {
  ads$;
  constructor(private getAdsService: GetAdsService) {
    this.ads$ = this.getAdsService.getAll(5).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
   });
  }
}
