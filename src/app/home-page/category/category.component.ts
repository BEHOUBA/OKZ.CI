import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat: number[] = [1, 2, 3, 4, 5 , 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

}
