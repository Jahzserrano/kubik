import { Component } from '@angular/core';
import { GradesService } from '../../grades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-reviews',
  standalone: true,
  imports: [],
  templateUrl: './list-reviews.component.html',
  styleUrl: './list-reviews.component.scss'
})
export class ListReviewsComponent {

  sub!: Subscription;
  id!: string;
  // grades_id!: string;
  reviews! : any[];

  constructor(private gradeService: GradesService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
    //  this.grades_id = params['grades_id']
     });
     console.log(this.id);
     this.fetchReview()
   }

   fetchReview(){
    this.gradeService.fetchReview(this.id)
    .subscribe(response => {
      this.reviews = response
      console.log('response', response)
    })
   }

   onSubmit(){
    this.router.navigate(['/student'])
   }

   delete(review_id: string){
    this.gradeService.deleteReview(review_id)
    .subscribe(response => {
      console.log('delete', 'deleted')
      location.reload()
    })
   }

  addGrade(){
    this.router.navigate(['teacher/grades/reviews/add/', this.id])
  }

   goBack(){
    this.router.navigate(['/teacher/grades/', this.id])
   }
}
