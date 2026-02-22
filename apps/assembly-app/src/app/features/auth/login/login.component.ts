import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../core/guards/auth.guard";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login('demo-token');
    this.router.navigate(['/dashboard']);
  }
}
