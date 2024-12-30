import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionService } from './../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  @Input() subSubjectId: number | null = null; 
  questions: Question[] = [];
  loading: boolean = true;

  constructor(private questionService: QuestionService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['subSubjectId']) {
      if (this.subSubjectId) {
        this.loadQuestions();
      } else {
        this.questions = [];
        this.loading = false;
      }
    }
  }

  loadQuestions(): void {
    if (this.subSubjectId) {
      this.loading = true;
      this.questionService
        .getQuestionsBySubSubjectId(this.subSubjectId)
        .subscribe((questions) => {
          this.questions = questions;
          this.loading = false;
        });
    }
  }
}
