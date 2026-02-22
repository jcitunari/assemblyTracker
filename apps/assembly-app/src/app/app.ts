import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { ButtonComponent } from '@assembly/assembly-ui';

@Component({
  imports: [NxWelcome, RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'assembly-app';

  startPomodoro(): void {
    console.log('test button working!!')
  }
}
