import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { LocationService } from '../../location.service';
import { GetAdsService } from './../../get-ads.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-home-search-field',
  templateUrl: './home-search-field.component.html',
  styleUrls: ['./home-search-field.component.css']
})
export class HomeSearchFieldComponent implements OnInit, OnDestroy {
  categories;
  locations;
  filteredAdsList;
  adsCard;
  subscription: Subscription;

  constructor(
    categorieService: CategoryService,
    locationService: LocationService,
    private getAdsService: GetAdsService,
    private router: Router) {
      this.subscription = this.getAdsService.getAll().subscribe( ads =>
        this.adsCard = this.filteredAdsList = ads
      );
    this.categories = categorieService.localCategories;
    this.locations = locationService.locations;
  }

  setQueryParams(form) {
    this.router.navigate(['/listing'], {
      queryParams: form
    });
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
