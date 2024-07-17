import { Component, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgClass, NgOptimizedImage } from "@angular/common";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-apresentation',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('close', style({
        opacity: 0,
        transform: 'scale(0)'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('1s')
      ])
    ])
  ]
})
export class ApresentationComponent implements OnInit {
  isOpen = false;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isOpen = true;
          this.cdr.detectChanges();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
