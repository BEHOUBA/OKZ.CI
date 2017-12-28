import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing-component.html',
  styleUrls: ['./listing-component.css']
})
export class ListingComponent implements OnInit {
  adCard: any[] = [0, 1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
  }

}
