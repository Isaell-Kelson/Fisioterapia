import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: any[];

  constructor() {
    this.images = [
      { source: 'assets/fisio1.jpg', alt: 'Description for Image 1', title: 'Title 1' },
      { source: 'assets/fisio2.jpg', alt: 'Description for Image 2', title: 'Title 2' },
    ];
  }
}
