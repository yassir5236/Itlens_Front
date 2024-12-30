import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectQuestionContainerComponent } from './subject-question-container.component';

describe('SubjectQuestionContainerComponent', () => {
  let component: SubjectQuestionContainerComponent;
  let fixture: ComponentFixture<SubjectQuestionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectQuestionContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectQuestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
