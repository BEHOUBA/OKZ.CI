import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  email: string;
  password: string;
  notification: string;

  constructor(private authService: AuthService) { }

  createAccount(data: FormArray) {
    this.notification = this.authService.notification || 'Veillez reessayer s\'l vous plait';
    this.email = data.value.email;
    this.password = data.value.password;
    console.log(data.value);
    this.authService.createAccount(this.email, this.password);
  }
}
