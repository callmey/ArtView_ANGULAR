import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QnaService } from '../../services/qna.service';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  private qnaService: QnaService;
   private questions: Question[]; 
   constructor(qnaService: QnaService) { 
     this.qnaService = qnaService; } 
     
     ngOnInit() { this.qnaService
      .getQuestionList().then(
        questions => this.questions = questions); }
}
