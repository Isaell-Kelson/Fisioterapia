import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {WelcomeComponent} from "./shared/components/welcome/welcome.component";
import {ApresentationComponent} from "./shared/components/apresentation/apresentation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WelcomeComponent, ApresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
