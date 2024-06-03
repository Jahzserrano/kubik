import { Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";
import { StudentComponent } from './views/student/student.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'student', component: StudentComponent },
];
