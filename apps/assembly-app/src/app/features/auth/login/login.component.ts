import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../core/guards/auth.guard";
import {CardComponent} from "@assembly/assembly-ui";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardComponent,
    FormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';
  constructor(private auth: AuthService, private router: Router) {
    console.log('test1')
  }

  onLogin() {
    this.auth.login('demo-token');
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Aquí llamarías al AuthService para hacer login
  }
}
