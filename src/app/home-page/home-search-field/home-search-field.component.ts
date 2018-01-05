import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';


@Component({
  selector: 'app-home-search-field',
  templateUrl: './home-search-field.component.html',
  styleUrls: ['./home-search-field.component.css']
})
export class HomeSearchFieldComponent implements OnInit {
  categories$;
  constructor(categorieService: CategoryService) {
    this.categories$ = categorieService.getCategories().valueChanges();
  }

  ngOnInit() {
  }

}
