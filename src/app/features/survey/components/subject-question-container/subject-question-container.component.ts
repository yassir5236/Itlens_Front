import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-question-container',
  templateUrl: './subject-question-container.component.html',
  styleUrl: './subject-question-container.component.css'
})
export class SubjectQuestionContainerComponent {
  selectedSubSubjectId: number | null = null; 

  onSubSubjectSelected(subSubjectId: number): void {
    this.selectedSubSubjectId = subSubjectId; 
  }
}
