import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButtonModule
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
