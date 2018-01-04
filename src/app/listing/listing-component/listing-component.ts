import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listing',
  templateUrl: './listing-component.html',
  styleUrls: ['./listing-component.css']
})
export class ListingComponent implements OnInit {
  adCard: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  constructor() { }


  gridDisplay(){
    document.getElementById('bar').style.display = 'none';
    document.getElementById('grid').style.display = 'initial';
  }
  barDisplay(){
    document.getElementById('grid').style.display = 'none';
    document.getElementById('bar').style.display = 'initial';
  }
  ngOnInit() {
  }

}
