import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserInterface } from '../../user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  // {
//   "id": 2,
//   "grade_fk"

//   "type_fk": {
//       "id": 2,
//       "name": "test"
//   "name": "Test Spanish Occupation",
//   "description": "Test about chapter 2 of the book",
//   "grade": "85"
// }

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers as needed
    })
  };

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() : void {

    if (this.form.value.username == "jahaziel.serrano"){
      this.router.navigate(['/student'])
    }
    this.router.navigate(['/teacher'])

    // this.http.post<{user: UserInterface}>(
    //     'http://127.0.0.1:8000/api-user-login/',

    //     this.form.value

    //   )
    // .subscribe(response => {
    //   console.log('response', response)
    //   localStorage.setItem('token', response.user.token)
    //   this.authService.currentUserSig.set(response.user);
    //   this.router.navigateByUrl('/')
    // });
  }
  // onSubmit() : void {

  //     console.log(this.form.value)
  // }
}
