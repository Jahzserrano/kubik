import { Component, inject } from '@angular/core';
import { GradesService } from '../grades.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-course.component.html',
  styleUrl: './form-course.component.scss'
})
export class FormCourseComponent {
  // courses!: any[]
  fb = inject(FormBuilder);
  // http = inject(HttpClient);
  // authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    subject_fk: 1,
    teacher_fk: 2,
  });

  constructor (private gradeService: GradesService) {}


  onSubmit(){
    console.log('body_test', this.form.value)
    this.gradeService.addCouse(this.form.value)
    .subscribe(response => {console.log('response', response)})
    location.reload();
    this.goBack();
  }
  goBack(){
    this.router.navigate(['/teacher/'])
  }

}
