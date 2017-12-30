import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  ratingStars = [true, true, true, true, false];
  adInfo: any[] = [0, 1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
  }
  addToFavorite() {
    const isAdded =  document.getElementById('favorite');
    if (isAdded.style.color === 'yellow') {
      isAdded.style.color = 'rgb(59, 57, 57)';
    } else {
      isAdded.style.color = 'yellow';
    }
  }
}
