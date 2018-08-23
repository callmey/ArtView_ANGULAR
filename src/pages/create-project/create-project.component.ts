import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  private projectService: ProjectService;
  private project: Project;
  private route: ActivatedRoute;

  constructor(projectService: ProjectService, route: ActivatedRoute) {
    this.projectService = projectService;
    this.route = route;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']; 
    if (id == 0){
      this.project = new Project();
      this.project.id =0 ;
    }else{
      this.projectService
      .getProject(id)
      .then(project => 
        this.project = project);
  
      }    
    }

  projectSubmitTest() {
    this.projectService
      .projectSubmitTest(this.project)
      .then(message => alert(message));
  }

}
