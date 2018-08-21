import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../../models/question';
import { QnaService } from '../../services/qna.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private qnaService: QnaService;
  private route: ActivatedRoute;
  private question: Question;


  constructor(qnaService: QnaService, route: ActivatedRoute) {
    this.qnaService = qnaService;
    this.route = route;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']; 
    if (id == 0){
      this.question = new Question();
      this.question.id =0 ;
    }else{
      this.qnaService
      .getQuestion(id)
      .then(question => 
        this.question = question);
  
      }    
    }
  save(){
    this.qnaService
    .saveQuestion(this.question)
    .then(message =>alert(message));
  }

}
