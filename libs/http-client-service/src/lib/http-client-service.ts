// This code is not tested and might cause errors
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';

@Injectable()
export class HttpClientService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    this.headers.append('Cache-control', 'no-cache');
    this.headers.append('Cache-control', 'no-store');
    this.headers.append('Expires', '0');
    this.headers.append('Pragma', 'no-cache');
  }

  public post(url, data): Observable<any> {
    return this.http.post(url, data, { headers: this.headers }).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError('error');
  }
}
