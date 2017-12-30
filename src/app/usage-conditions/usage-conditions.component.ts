import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-conditions',
  templateUrl: './usage-conditions.component.html',
  styleUrls: ['./usage-conditions.component.css']
})
export class UsageConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
