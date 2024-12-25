

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:9090/api/surveys';

  constructor(private http: HttpClient) {}

  getSurveys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
