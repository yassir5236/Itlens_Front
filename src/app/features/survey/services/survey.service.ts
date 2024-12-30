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

  getSurveyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addSurvey(survey: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, survey);
  }
  
  updateSurvey(id: number, survey: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, survey);
  }
  
  deleteSurvey(surveyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${surveyId}`);
  }
}
