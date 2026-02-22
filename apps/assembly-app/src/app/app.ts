import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ButtonComponent} from '@assembly/assembly-ui';

@Component({
  imports: [RouterModule, ButtonComponent],
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
