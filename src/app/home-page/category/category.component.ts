import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CategoryService } from './../../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories$;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories().valueChanges();
   }
  ngOnInit() {
  }
}
