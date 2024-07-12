import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    { quote: 'Serviço excelente! Recomendo a todos.', author: 'João Silva' },
    { quote: 'Muito satisfeita com o atendimento.', author: 'Maria Oliveira' },
    { quote: 'Qualidade impecável, voltarei sempre!', author: 'Carlos Souza' }
  ];
}
