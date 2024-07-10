import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../grades.service';
import { Router } from '@angular/router';

interface Grades {
  id: string;
  subject: string;
  course: string;
  teacher: string;
  grade: string;

}


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit {

  grades!: any[];

  constructor(private gradeService: GradesService, private router: Router) {}

  ngOnInit(): void {
    this.fetchGrades();
  }

  fetchGrades() {
    this.gradeService.fetchGrades()
    .subscribe(response => {
      this.grades = response
      console.log('response', response)
      // console.log('grades', this.grades)
    });
  }

  onSubmit(grade_id : string) : void {
    this.router.navigate(['/student/review', grade_id])
  }

}
