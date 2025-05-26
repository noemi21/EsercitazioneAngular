import { Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesListComponent},
    {path: 'courses/:id', component: CourseDetailComponent},
];
