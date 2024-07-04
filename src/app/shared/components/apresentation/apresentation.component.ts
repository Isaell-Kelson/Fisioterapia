import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';
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
  isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('.apresentation__section');
    const boundingClientRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verifica se a seção está visível no viewport
    if (boundingClientRect.top >= 0 && boundingClientRect.bottom <= windowHeight) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
