import { Component, OnInit } from '@angular/core';
import { Space } from '../../models/Space'; 
import { SpaceService } from '../../services/space.service'
@Component({
  selector: 'app-space-list1',
  templateUrl: './space-list1.component.html',
  styleUrls: ['./space-list1.component.css']
})
export class SpaceList1Component implements OnInit {

  private spaceService: SpaceService;
  private spaces: Space[]; 
  
  constructor(spaceService: SpaceService) { 
    this.spaceService = spaceService; 
  } 
  
  ngOnInit() { 
    this.spaceService.getSpaces("초밥").then( 
      spaces => this.spaces = spaces 
    ); 
  }
}
