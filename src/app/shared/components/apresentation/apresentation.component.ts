import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-apresentation',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './apresentation.component.html',
  styleUrl: './apresentation.component.css'
})
export class ApresentationComponent {

}
