import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule,CourseCardComponent], 
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  titolo: string = 'Corsi disponibili';
  wishlist: Course[] = [];
  courses: Course[] = [];


  constructor(private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err: any) => {
        console.error('Errore nel recupero dei corsi:', err);
      }
    });
  }

onCourseBooked(course: Course): void {
    console.log(`il genitore ha saputo della prenotazione:` ,course.title);
}

onWishlistAdded(course: any): void {
    console.log(`il genitore ha saputo dell'aggiunta alla wishlist:` ,course.title);
    this.wishlist.push(course);
  }
}