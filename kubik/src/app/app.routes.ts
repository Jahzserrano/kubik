import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
    { path: 'app-login', component: LoginComponent },
    { path: '',   redirectTo: '/app-login', pathMatch: 'full' }
];
