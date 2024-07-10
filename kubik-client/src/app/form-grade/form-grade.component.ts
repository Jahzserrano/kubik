import { Component, inject } from '@angular/core';
import { GradesService } from '../grades.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-grade',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-grade.component.html',
  styleUrl: './form-grade.component.scss'
})
export class FormGradeComponent {
  courses!: any[]
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  id!: string;
  sub!: Subscription;

  form = this.fb.nonNullable.group({
    grade_fk: [1],
    type_fk: [2],
    name: [''],
    description: [''],
    grade: ['']
  });


  constructor (private gradeService: GradesService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
    //  this.grades_id = params['grades_id']
     });
     console.log(this.id);
   }

  // body = {
  //   "grade_fk" : 1,
  //   "type_fk" : 1,
  //   "name" : "Read Quijote",
  //   "description" : "Read Chapter one of El Quijote",
  //   "grade" : "24"
  //  }


  onSubmit() : void{
    console.log('body_test', this.form.value)
    this.gradeService.addGradeReview(this.form.value)
    .subscribe(response => {console.log('response', response)})
    this.goBack();
  }

  goBack(){
    this.router.navigate(['/teacher/grades/reviews/', this.id])
  }
}
