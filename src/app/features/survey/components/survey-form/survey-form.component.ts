
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from './../../services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  survey: any = { title: '', description: '' };
  isEditMode = false;

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const surveyId = this.route.snapshot.paramMap.get('id');
    if (surveyId) {
      this.isEditMode = true;
      this.surveyService.getSurveyById(+surveyId).subscribe((data) => {
        this.survey = data;
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.surveyService.updateSurvey(this.survey.id, this.survey).subscribe(() => {
        this.router.navigate(['/surveys']);
      });
    } else {
      this.surveyService.addSurvey(this.survey).subscribe(() => {
        this.router.navigate(['/surveys']);
      });
    }
  }
}
