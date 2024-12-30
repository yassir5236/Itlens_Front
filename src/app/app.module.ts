import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { SurveyListComponent } from './features/survey/components/survey-list/survey-list.component';
import { SurveyItemComponent } from './features/survey/components/survey-item/survey-item.component';
import { SurveyEditionsListComponent } from './features/survey/components/survey-editions-list/survey-editions-list.component';
import { SurveyEditionsItemComponent } from './features/survey/components/survey-editions-item/survey-editions-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './features/survey/components/subject/subject.component';
import { QuestionComponent } from './features/survey/components/question/question.component';
import { SubjectQuestionContainerComponent } from './features/survey/components/subject-question-container/subject-question-container.component';
import { SurveyFormComponent } from './features/survey/components/survey-form/survey-form.component';
// import { SurveyQuestionContainerComponent } from './features/survey/components/survey-question-container/survey-question-container.component';
import { FormsModule } from '@angular/forms'; // Importation nécessaire

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyEditionsListComponent,
    SurveyEditionsItemComponent,
    SubjectComponent,
    QuestionComponent,
    SubjectQuestionContainerComponent,
    SurveyFormComponent,
    // SurveyQuestionContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 

  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
