import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(projectService: ProjectService, private router: Router) {
    this.projectService = projectService;
  }

  ngOnInit() {
    this.projectService.getProjects().then(
      projects => this.projects = projects
    );
  }

  projectDetail(p: Project) {
    this.router.navigate(['/project-detail', p.id])
  }

}
