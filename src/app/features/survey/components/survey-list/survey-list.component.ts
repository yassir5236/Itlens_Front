// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';

// @Component({
//   selector: 'app-survey-list',
//   templateUrl: './survey-list.component.html',
//   styleUrl: './survey-list.component.css'
// })
// export class SurveyListComponent implements OnInit {

//   public surveys: any
//   constructor(private http :HttpClient) { }

//   ngOnInit()  {
//       this.http.get("http://localhost:9090/api/surveys")
//       .subscribe({
//         next : data  => {
//           this.surveys = data;},
//         error: (error) => console.error('Error:', error)
//       })

//   }


// }




import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'] // Correction orthographique : styleUrls au pluriel
})
export class SurveyListComponent implements OnInit {

  public surveys: any[] = []; // Liste pour stocker les surveys

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Appel à l'API pour récupérer les surveys
    this.http.get<any[]>('http://localhost:9090/api/surveys')
      .subscribe({
        next: (data) => {
          this.surveys = data; // Stockage des données
          console.log('Surveys fetched:', this.surveys); // Debug
        },
        error: (error) => {
          console.error('Error fetching surveys:', error); // Gestion des erreurs
        }
      });
  }
}
