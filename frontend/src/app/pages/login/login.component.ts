import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Button,
    RouterLink,
    InputTextModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
