import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../grades.service';
import { CommonModule } from '@angular/common';
import { ListGradesComponent } from '../../components/list-grades/list-grades.component';
import { ListReviewsComponent } from '../../components/list-reviews/list-reviews.component';
import { ListStudentComponent } from '../../components/list-student/list-student.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, ListGradesComponent, ListReviewsComponent, ListStudentComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent implements OnInit {

  courses!: any[]

  constructor (private gradeService: GradesService,
               private router: Router) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(){
    this.gradeService.fetchCourses()
    .subscribe(response => {
      this.courses = response
      console.log('response', response)
    })
  }

  onSubmit(course_id: string){
    this.router.navigate(['/teacher/grades/', course_id])
  }
  addCourse(){
    this.router.navigate(['/teacher/course/add/'])
  }

  delete(course_id : string) {
    this.gradeService.deleteCourse(course_id)
    .subscribe(response => {
      console.log('delete', course_id)
      location.reload()
    })
  }

  // get a list of students
  // Can Delete Grades and reviews
  // Can add courses and reviews
  // Can see a list of grades
  // componentName: string = '';
  // onKey(componentName: string): void {
  //   this.componentName = componentName;
  // }

}
