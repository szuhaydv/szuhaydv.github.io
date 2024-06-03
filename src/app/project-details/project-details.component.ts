import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectDetail } from '../projects/projectClasses';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  @Input() project: Project = new Project(Math.random()*1000, 'assets/error.svg', 'Error', "", [], false, new ProjectDetail(["Error"], [], []))

  ngOnInit() {
    this.project = history.state?.projectData
  }
}
