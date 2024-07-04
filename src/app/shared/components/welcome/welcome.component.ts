import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    MatDivider
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
