import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, CoursesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-booking-system';
}
