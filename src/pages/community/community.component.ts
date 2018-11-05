import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  private projectService: ProjectService;
  private project: Project;
  private projects: Project[];
  private route: ActivatedRoute;

  constructor(projectService: ProjectService, route: ActivatedRoute) {
    this.projectService = projectService;
    this.route = route;
  }

  ngOnInit() {
    this.projectService.getProjects().then(
      projects => this.projects = projects
    );
  }

}
