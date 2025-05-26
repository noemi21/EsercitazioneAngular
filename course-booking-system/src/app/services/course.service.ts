import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private basedUrl = 'https://localhost:3000'; 

  private selectedCourse: Course | null = null;

  setSelectedCourse(course: Course){
    this.selectedCourse = course;
  }
  getSelectedCourse(): Course | null {
    return this.selectedCourse;
  }

  constructor(private http: HttpClient) { }

  //get all courses
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('${this.badedUrl}/courses');
  }

  //post a new course
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.basedUrl}/courses`, course);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.basedUrl}/courses/${id}`);
  }

}
