

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SurveyService } from './../../services/survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'] // Correction orthographique : styleUrls au pluriel
})
export class SurveyListComponent implements OnInit {

  public surveys: any[] = []; // Liste pour stocker les surveys

  constructor(private SurveyService :SurveyService) {}

  ngOnInit() {
   this.loadSurveys();
  }

  loadSurveys() {
    this.SurveyService.getSurveys().subscribe(data => {
      this.surveys = data;
      console.log('Surveys fetched:', this.surveys);
    }, error => {
      console.error('Error fetching surveys:', error);
    });
  }

}
