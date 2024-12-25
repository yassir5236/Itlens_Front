import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './features/survey/components/survey-list/survey-list.component';
import { SurveyItemComponent } from './features/survey/components/survey-item/survey-item.component';
import { SurveyEditionsItemComponent } from './features/survey/components/survey-editions-item/survey-editions-item.component';

const routes: Routes = [
  {path: 'surveys', component: SurveyListComponent},
  {path: 'survey-item', component: SurveyItemComponent},
  {path: 'survey-editions-list', component: SurveyListComponent},
  {path: 'survey-editions-item', component: SurveyEditionsItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 