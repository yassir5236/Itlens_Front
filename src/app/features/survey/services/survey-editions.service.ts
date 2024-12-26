import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEdition } from './../models/survey-editions.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private apiUrl = 'http://localhost:9090/api/survey-editions'; // Remplacez par votre API

  constructor(private http: HttpClient) {}

  getSurveyEditionById(id: number): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.apiUrl}/${id}`);
  }
}
