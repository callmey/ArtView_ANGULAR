import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Artfield } from '../../models/artfield';
import { District } from '../../models/district';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  private projectService: ProjectService;
  private project: Project;
  private route: ActivatedRoute;

  constructor(projectService: ProjectService, route: ActivatedRoute) {
    this.projectService = projectService;
    this.route = route;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']; 
    if (typeof id == "undefined"){
      this.project = new Project();
      this.project.id = 0 ;
    }else{
      this.projectService
      .getProject(id)
      .then(project => 
        this.project = project);
    }
    
  }

}
