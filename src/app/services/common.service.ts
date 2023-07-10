import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const baseUrl1 = 'http://localhost:4000/api/v1/student';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = 'http://localhost:4000';
  errorData: {};
  constructor(private http: HttpClient) { }
  getTeacher() {
    const url = this.baseUrl + '/api/v1/teacher';
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  saveTeacher(body) {
    const url = this.baseUrl + '/api/v1/teacher';
    return this.http.post(url, body).pipe(
      catchError(this.handleError)
    );
  }
  getStudent() {
    const url = this.baseUrl + '/api/v1/student';
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  saveStudent(body) {
    const url = this.baseUrl + '/api/v1/student';
    return this.http.post(url, body).pipe(
      catchError(this.handleError)
    );
  }
  deleteStudent1(id) {
    const url = this.baseUrl + '/api/v1/student?id=';
    return this.http.delete(url+id).pipe(
      catchError(this.handleError)
    );
  }
  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${baseUrl1}/${id}`).pipe(
      catchError(this.handleError)
    );
   }

  // updateStudent(id: any): Observable<any> {
  //   return this.http.put(`${baseUrl1}/${id}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  updateStudent(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl1}/${id}`, data).pipe(
          catchError(this.handleError)
         );
  }

  createUser(data: any): Observable<any> {
    const url = this.baseUrl + '/api/v1/user';
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
     );
  }
  login(data: any): Observable<any> {
    const url = this.baseUrl + '/api/v1/user/login';
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
     );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
