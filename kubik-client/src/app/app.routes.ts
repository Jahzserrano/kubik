import { Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";
import { StudentComponent } from './views/student/student.component';
import { ReviewComponent } from './views/review/review.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import { ListGradesComponent } from './components/list-grades/list-grades.component';
import { ListReviewsComponent } from './components/list-reviews/list-reviews.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { FormGradeComponent } from './form-grade/form-grade.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'student', component: StudentComponent },
    { path: 'student/review/:id', component: ReviewComponent},
    { path: 'teacher', component: TeacherComponent },
    { path: 'teacher/grades/:id', component: ListGradesComponent},
    { path: 'teacher/grades/reviews/:id', component: ListReviewsComponent},
    { path: 'teacher/course/add', component: FormCourseComponent},
    { path: 'teacher/grades/reviews/add/:id', component: FormGradeComponent}
];

