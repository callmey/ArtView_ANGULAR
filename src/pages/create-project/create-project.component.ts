import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  projectSubmitTest() {
    this.projectService
      .ProjectSubmitTest(this.project)
      .then(message => alert(message));
  }

}
