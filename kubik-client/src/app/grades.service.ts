import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, endWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private apiUrl = 'http://127.0.0.1:8000/api/'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers as needed
    })
  };

  // private apiReview = 'http://127.0.0.1:8000/api/reviews/'

  constructor(private http: HttpClient) { }

    // Can see a list of grades
  fetchGrades(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'grades/');
  }
  /** POST: add a new hero to the database */
  addGradeReview(grade: any) {
    return this.http.post<any>(this.apiUrl + 'reviews/', grade, this.httpOptions)
  }
  // handleError(arg0: string, grade: any[]): (err: any, caught: Observable<any[]>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Method not implemented.');
  // }
  addCouse(course: any) {
    return this.http.post<any>(this.apiUrl + 'courses/', course, this.httpOptions)
  }
  fetchCourses(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'list-course/');
  }

  deleteCourse(course_id: string) {
    let endpoint: string = "courses/" + course_id + "/";
    return this.http.delete<any[]>(this.apiUrl + endpoint)
  }

   // get a list of students
  fetchStudent(type: string): Observable<any[]>{
    let endpoint: string = "users/" + type + "/";
    return this.http.get<any[]>(this.apiUrl + endpoint)
  }

  // Delete Grade by id
  deleteGrade(id: string): Observable<any[]>{
    let endpoint: string = "grades/" + id + "/";
    return this.http.delete<any[]>(this.apiUrl + endpoint)
  }

  // Delete review by id
  deleteReview(id: string): Observable<any[]>{
    let endpoint: string = "reviews/" + id + "/";
    return this.http.delete<any[]>(this.apiUrl + endpoint)
  }

  // get a list of reviews
  fetchReview(id: string): Observable <any[]>{
    return this.http.get<any[]>(this.apiUrl + 'list-review/');
  }

  // Delete Student by id
  deleteStudent(id: string): Observable<any[]>{
    let endpoint: string = "student/" + id + "/";
    return this.http.delete<any[]>(this.apiUrl + endpoint)
  }
}


  // Add courses
  // Add reviews
  // Add User
