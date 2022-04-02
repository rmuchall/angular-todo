import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: "flex flex-col min-h-screen bg-gray-100"
  }
})
export class AppComponent {
  title = 'angular-web';
}
