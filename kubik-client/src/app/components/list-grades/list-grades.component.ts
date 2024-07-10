import { Component } from '@angular/core';
import { GradesService } from '../../grades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-grades',
  standalone: true,
  imports: [],
  templateUrl: './list-grades.component.html',
  styleUrl: './list-grades.component.scss'
})
export class ListGradesComponent {
  grades!: any[];
  id!: string;
  sub!: Subscription;

  // general

  constructor(private gradeService: GradesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
    console.log(this.id);
    // this.updateGrades();
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
  updateGrades(){}

  onSubmit(grade_id : string) : void {
    this.router.navigate(['/teacher/grades/reviews/', grade_id])
  }

  delete(grade_id: string){
    this.gradeService.deleteGrade(grade_id)
    .subscribe(response => {
      console.log('delete', 'deleted')
      location.reload()
    })
  }

  goBack(){
    this.router.navigate(['/teacher'])
  }
}
