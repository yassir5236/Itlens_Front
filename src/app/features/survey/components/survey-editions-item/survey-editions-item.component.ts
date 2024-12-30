

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Corrected import for Router
import { SurveyEdition } from './../../models/survey-editions.model';
import { SurveyEditionService } from './../../services/survey-editions.service';

@Component({
  selector: 'app-survey-editions-item',
  templateUrl: './survey-editions-item.component.html',
  styleUrls: ['./survey-editions-item.component.css']
})
export class SurveyEditionsItemComponent implements OnInit {
  editionId: number | null = null;
  surveyEdition: SurveyEdition | null = null;

  @Output() subSubjectClicked = new EventEmitter<number>()

  constructor(
    private route: ActivatedRoute, // Use ActivatedRoute to get the ID from the route
    private router: Router, // Inject Router to handle navigation
    private surveyEditionService: SurveyEditionService // Inject SurveyEditionService to fetch survey edition data
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.editionId = Number(params.get('id'));

      if (this.editionId) {
        // Fetch survey edition by ID
        this.surveyEditionService.getSurveyEditionById(this.editionId).subscribe(
          (data: SurveyEdition) => {
            this.surveyEdition = data;
            console.log('Survey Edition:', this.surveyEdition);
          },
          (error) => {
            console.error('Error fetching survey edition:', error);
          }
        );
      }
    });
  }

  onSubSubjectClick(subSubjectId: number): void {
    this.subSubjectClicked.emit(subSubjectId);
    // this.router.navigate(['/subject-question-container', subSubjectId]);
    // this.router.navigate(['/questions', subSubjectId]);

  }


}


