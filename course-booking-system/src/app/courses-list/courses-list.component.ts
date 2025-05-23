import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  titolo: string = 'Corsi disponibili';
  courses = [
    {id: 1, title: 'Corso di Angular', description: 'Impara le basi di Angular', date: '2023-03-23', price: 200, soldOut: false, img:'foto1.png' },
    {id: 2, title: 'Corso di React', description: 'Impara le basi di React', date: '2022-02-23', price: 200, soldOut: true, img:'foto2.jpeg' }
  ];



viewDetails(corso: any): void {
  alert(`Dettagli del corso per ${corso.title}`);
}


}
