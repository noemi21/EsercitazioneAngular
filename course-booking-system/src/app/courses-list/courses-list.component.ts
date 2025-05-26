import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule,CourseCardComponent], 
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  titolo: string = 'Corsi disponibili';
  wishlist: any[] = [];
  courses = [
    {id: 1, title: 'Corso di Angular', description: 'Impara le basi di Angular', date: '2023-03-23', price: 200, soldOut: false, img:'foto1.png' },
    {id: 2, title: 'Corso di React', description: 'Impara le basi di React', date: '2022-02-23', price: 200, soldOut: true, img:'foto2.jpeg' }
  ];

  onCourseBooked(course: any): void {
    console.log(`il genitore ha saputo della prenotazione:` ,course.title);
}

onWishlistAdded(course: any): void {
    console.log(`il genitore ha saputo dell'aggiunta alla wishlist:` ,course.title);
    this.wishlist.push(course);
  }
}