import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  [x: string]: any;
  course: Course | null = null;

    courses = [
    { id: 1, title: 'Corso di Angular', description: 'Impara Angular', date: '2023-03-23', price: 200, img: 'foto1.png' },
    { id: 2, title: 'Corso di React', description: 'Impara React', date: '2022-02-23', price: 200, img: 'foto2.jpeg' }
  ];

ngOnInit(): void {
    const id = Number(this['route'].snapshot.paramMap.get('id'));
    this.course = this.courses.find(c => c.id === id) ?? null;
  }

  constructor(private courseService: CourseService) {}
  loadCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err: any) => {
        console.error('Errore nel recupero del corso:', err);
      }
    })
  }
}
