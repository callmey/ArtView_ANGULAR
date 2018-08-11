import { Component, OnInit } from '@angular/core';
import { NaverSpace } from '../../models/NaverSpace'; 
import { SpaceService } from '../../services/space.service';

@Component({
  selector: 'app-naver-space',
  templateUrl: './naver-space.component.html',
  styleUrls: ['./naver-space.component.css']
})
export class NaverSpaceComponent implements OnInit {

  private spaceService: SpaceService;
  private spaces: NaverSpace[]; 
  
  constructor(spaceService: SpaceService) { 
    this.spaceService = spaceService; 
  } 
  
  ngOnInit() { 
    this.spaceService.getNaverSpace("초밥").then( 
      spaces => this.spaces = spaces 
    ); 
  }
}
