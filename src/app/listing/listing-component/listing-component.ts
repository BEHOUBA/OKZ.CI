import { Component, OnInit } from '@angular/core';
import { GetAdsService } from './../../get-ads.service';
import { Advert } from '../../advert';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-listing',
  templateUrl: './listing-component.html',
  styleUrls: ['./listing-component.css']
})
export class ListingComponent implements OnInit {
  page: number;
  title: string;
  category: string;
  location: string;
  filteredAds: Advert[] = [];
  adsCard: Advert[] = [];
  suscritpion: Subscription;


  constructor(private getAdsService: GetAdsService, private route: ActivatedRoute) {
    this.getAdsService
    .getAll()
    .switchMap( ads => {
      this.adsCard = <Advert[]>ads;
      return route.queryParamMap;
    })
    .subscribe( params => {
      this.title = params.get('query');
      this.filteredAds = (this.title !== null) ?
        this.adsCard.filter( ad => ad.title.toLowerCase().includes(this.title.toLowerCase())) :
        this.adsCard;
    });
  }


  gridDisplay() {
    console.log(this.adsCard, this.filteredAds);
    // console.log(this.title);
    // document.getElementById('bar').style.display = 'none';
    // document.getElementById('grid').style.display = 'initial';
  }
  barDisplay() {
    document.getElementById('grid').style.display = 'none';
    document.getElementById('bar').style.display = 'initial';
  }

  ngOnInit() {
  }

}
