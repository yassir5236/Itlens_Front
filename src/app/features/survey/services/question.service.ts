import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {}

  // Adjusting the method to extract the 'questions' array from the response
  getQuestionsBySubSubjectId(subSubjectId: number): Observable<Question[]> {
    return this.http.get<any>(`http://localhost:9090/api/sub-subjects/${subSubjectId}`).pipe(
      map(response => response.questions) // Extract the questions array
    );
  }
}
