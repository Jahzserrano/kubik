import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { GradesService } from '../../grades.service';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit {

  sub!: Subscription;
  id!: string;
  reviews! : any[];

  constructor(private gradeService: GradesService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
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
}
