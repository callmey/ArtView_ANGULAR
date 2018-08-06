import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor() { }
  Arr = Array; //Array type captured in a variable
  num:number = 4;
  ngOnInit() {
  }

}
