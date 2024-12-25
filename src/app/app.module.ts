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

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyEditionsListComponent,
    SurveyEditionsItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
