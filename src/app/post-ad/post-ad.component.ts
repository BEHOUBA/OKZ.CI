import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category.service';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent implements OnInit {
  categories$;
  locations: string[];
  localCategories;
  isAuch: boolean;

  adType(){
    const select = (<HTMLSelectElement>document.getElementById('bids'));
    const selectedOption = select.options[select.selectedIndex].value.toLowerCase();
    if (selectedOption === 'vente directe'){
      this.isAuch = false;
    } else{
      this.isAuch = true;
    }
  }

  hideElements() {
    const select = (<HTMLSelectElement>document.getElementById('categories'));
    const selectedOption = select.options[select.selectedIndex].value.toLowerCase();
    const list = document.getElementById('form-field').children;
    const elementsToHide = (document.getElementsByClassName(selectedOption));
    console.log(selectedOption);

    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains(selectedOption) || list[i].classList.contains('all')) {
        (<HTMLElement>list[i]).style.display = 'block';
      } else {
        (<HTMLElement>list[i]).style.display = 'none';
      }
      }
}
  constructor(categoryService: CategoryService, locationService: LocationService) {
    this.categories$ = categoryService.getCategories().valueChanges();
    this.locations = locationService.locations;
    this.localCategories = categoryService.localCategories;
   }

  ngOnInit() {
  }

}