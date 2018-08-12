import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  private route: ActivatedRoute;
  constructor(spaceService: SpaceService,route: ActivatedRoute) { 
    this.spaceService = spaceService; 
    this.route = route;
  } 
  
  ngOnInit() { 

    let keyword = this.route.snapshot.params['keyword'];
    this.spaceService
    .getNaverSpace(keyword)
    .then(spaces => 
      this.spaces = spaces  );
  }
}
