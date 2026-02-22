import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-secure-layout',
  templateUrl: './secure-layout.component.html',
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class SecureLayoutComponent {}
