import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category.service';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent implements OnInit {
  categories$;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories().valueChanges();
   }
  hideElement() {
      const select = (<HTMLSelectElement>document.getElementById('category')) ;
      const selectedOption = select.options[select.selectedIndex].value;
      const list = document.getElementById('form-field').getElementsByTagName('div') ;
      const elementsToHide = (document.getElementsByClassName(selectedOption));
      for (let i = 0; i < list.length; i++){
        if(list[i].classList.contains(selectedOption) || list[i].classList.contains('all')){
          list[i].style.display = 'block';
        } else {
          list[i].style.display = 'none';
        }
        }
  }
  ngOnInit() {
  this.hideElement();
  }

}