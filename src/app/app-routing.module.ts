import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './features/survey/components/survey-list/survey-list.component';
import { SurveyItemComponent } from './features/survey/components/survey-item/survey-item.component';
import { SurveyEditionsItemComponent } from './features/survey/components/survey-editions-item/survey-editions-item.component';
import { QuestionComponent } from './features/survey/components/question/question.component';
import { SubjectQuestionContainerComponent } from './features/survey/components/subject-question-container/subject-question-container.component';
import { SurveyFormComponent } from './features/survey/components/survey-form/survey-form.component';
// import { SurveyQuestionContainerComponent } from './features/survey/components/survey-question-container/survey-question-container.component';

const routes: Routes = [
  {path: 'surveys', component: SurveyListComponent},
  {path: 'survey-item', component: SurveyItemComponent},
  // {path: 'survey-editions-list', component: SurveyListComponent},
  {path: 'survey-editions-item/:id', component: SurveyEditionsItemComponent},
  { path: 'questions/:subSubjectId', component: QuestionComponent },
  // { path: 'questions/subsubject/:id', component: QuestionComponent },
  // { path: 'survey-question', component: SurveyQuestionContainerComponent },
  // { path: 'survey-container/:editionId', component: SurveyQuestionContainerComponent }, 
  {path : 'subject-question-container/:id' , component: SubjectQuestionContainerComponent},
  { path: 'surveys/new', component: SurveyFormComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 