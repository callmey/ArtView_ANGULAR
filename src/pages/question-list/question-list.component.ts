import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Question } from '../../models/question';
import { QnaService } from '../../services/qna.service';
import { Answer } from '../../models/answer';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  private qnaService: QnaService;
   private questions: Question[]; 
   private selectedQuestion : Question;
   private  answers : Answer[];
   constructor(qnaService: QnaService, private router: Router) { 
     this.qnaService = qnaService; } 
     
     ngOnInit() { this.qnaService
      .getQuestionList().then(
        questions => this.questions = questions); }

        gotoQuestion(q: Question) { 
          let id = (q) ? q.id : 0; 
          this.router.navigate(['/questionDetail', id]);
         }

         selectQuestion(question : Question){
           this.selectedQuestion =question;
          this.qnaService
           .getAnswerList(this.selectedQuestion.id)
           .then(
             answers =>
              this.answers = answers
           );
         }
         save(){
          this.qnaService
          .updateQuestion(this.selectedQuestion)
          .then(message =>alert(message));
        }
}
