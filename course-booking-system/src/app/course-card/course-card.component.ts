import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() corso?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishlistAdded = new EventEmitter<any>();


  onCourseBooked(): void {
    this.courseBooked.emit(this.corso);
  }   

  onAddToWishlist(): void {
    this.wishlistAdded.emit(this.corso);
  }   
}
