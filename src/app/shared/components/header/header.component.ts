import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, NgClass, NgOptimizedImage, FaIconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.toolbar');
    if (!clickedInside && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  protected readonly faWhatsapp = faWhatsapp;
}
