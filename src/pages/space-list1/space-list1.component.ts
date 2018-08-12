import { Component, OnInit } from '@angular/core';
import { Space } from '../../models/Space'; 
import { SpaceService } from '../../services/space.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-space-list1',
  templateUrl: './space-list1.component.html',
  styleUrls: ['./space-list1.component.css']
})
export class SpaceList1Component implements OnInit {

  private spaceService: SpaceService;
  private spaces: Space[]; 
  
  constructor(spaceService: SpaceService, private router: Router) { 
    this.spaceService = spaceService; 
  } 
  
  ngOnInit() { 
    this.spaceService.getSpaceList().then( 
      spaces => this.spaces = spaces 
    ); 
  }

  gotoNaverSpace(s: Space){
    this.router.navigate(['/naver-space', s.name]);
  }
}
