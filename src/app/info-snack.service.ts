import { Injectable } from '@angular/core';

@Injectable()
export class InfoSnackService {

  constructor() { }

  displayInfo() {
    const snack = document.getElementById('snackbar');
    snack.className = 'show';
    setTimeout( function(){
      snack.className = snack.className.replace('show', '');
    }, 3000);
  }
}
