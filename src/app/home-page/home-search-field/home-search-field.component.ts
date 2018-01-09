import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { LocationService } from '../../location.service';


@Component({
  selector: 'app-home-search-field',
  templateUrl: './home-search-field.component.html',
  styleUrls: ['./home-search-field.component.css']
})
export class HomeSearchFieldComponent implements OnInit {
  categories;
  locations;
  constructor(categorieService: CategoryService, locationService: LocationService) {
    this.categories = categorieService.localCategories;
    this.locations = locationService.locations;
  }

  ngOnInit() {
  }

}
