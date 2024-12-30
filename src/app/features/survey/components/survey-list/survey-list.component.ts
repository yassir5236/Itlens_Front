


import { Component, OnInit } from '@angular/core';
import { SurveyService } from './../../services/survey.service';
import { OwnerService } from './../../services/owner.service'; 

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  public surveys: any[] = [];
  public owners: any[] = [];  
  public isAddSurveyModalOpen: boolean = false; 
  public newSurvey: any = { title: '', description: '', ownerId: 15 }; 

  constructor(
    private surveyService: SurveyService,
    private ownerService: OwnerService  
  ) {}

  ngOnInit() {
    this.loadSurveys();
    this.loadOwners();
  }

  loadSurveys() {
    this.surveyService.getSurveys().subscribe(data => {
      this.surveys = data;
    }, error => {
      console.error('Error fetching surveys:', error);
    });
  }

  loadOwners() {
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data; 
    }, error => {
      console.error('Error fetching owners:', error);
    });
  }

  openAddSurveyModal(): void {
    this.isAddSurveyModalOpen = true;
  }

  closeAddSurveyModal(): void {
    this.isAddSurveyModalOpen = false;
    this.newSurvey = { title: '', description: '', ownerId: 17 };
  }

  addSurvey(): void {
    if (this.newSurvey.title && this.newSurvey.description ) {
      this.surveyService.addSurvey(this.newSurvey).subscribe({
        next: (addedSurvey) => {
          this.surveys.push(addedSurvey); // Ajoute la nouvelle survey à la liste
          this.closeAddSurveyModal(); // Ferme le modal
          alert('Survey ajoutée avec succès.');
        },
        error: (err) => {
          console.error('Error adding survey:', err);
          alert('Échec de l’ajout de la survey.');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs, y compris le propriétaire.');
    }
  }

  deleteSurvey(surveyId: number): void {
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cette enquête ?');
    if (confirmDelete) {
      this.surveyService.deleteSurvey(surveyId).subscribe({
        next: () => {
          this.surveys = this.surveys.filter(survey => survey.id !== surveyId);
          alert('Survey supprimée avec succès.');
        },
        error: (err) => {
          console.error('Error deleting survey:', err);
          alert('Échec de la suppression de la survey.');
        }
      });
    }
  }
}
