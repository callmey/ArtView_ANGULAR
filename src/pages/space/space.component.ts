import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Space } from '../../models/space';
import { SpaceService} from '../../services/space.service';
@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  private spaceService : SpaceService;
  private route : ActivatedRoute;
  private space : Space;



  constructor(spaceService : SpaceService, route: ActivatedRoute) {
    this.spaceService = spaceService;
    this.route = route;
   }

  ngOnInit() {
    let id = this.route.snapshot.params['id']; 
    if (id == 0){
      this.space = new Space();
      this.space.id =0 ;
    }else{
      this.spaceService
      .getSpace(id)
      .then(space => 
        this.space = space);
  
      }    
    }
  save(){
    this.spaceService
    .saveSpace(this.space)
    .then(message =>alert(message));
  }
}
