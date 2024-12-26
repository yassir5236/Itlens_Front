import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // To get the route parameter
import { QuestionService } from './../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  subSubjectId!: number; // non-null assertion
  questions: Question[] = []; // Define it as an array of `Question`

  constructor(
    private route: ActivatedRoute, // To access the route parameters
    private questionService: QuestionService // To fetch questions from the API
  ) {}

  ngOnInit(): void {
    // Get the subSubjectId from the route parameters
    this.subSubjectId = +this.route.snapshot.paramMap.get('subSubjectId')!;
    this.loadQuestions();
  }

  loadQuestions(): void {
    // Fetch questions for the subSubjectId
    this.questionService.getQuestionsBySubSubjectId(this.subSubjectId).subscribe((questions) => {
      this.questions = questions;
    });
  }
}
