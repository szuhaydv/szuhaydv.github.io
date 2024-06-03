import { Component, Input } from '@angular/core';
import { Project, ProjectDetail } from '../projectClasses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  router: Router

  constructor(router: Router) {
    this.router = router
  }

  showDetails(project: Project) {
    this.router.navigate(['projects', project.id], { state: { projectData: project } })
  }

  @Input() card: Project = new Project(Math.random()*1000, 'assets/error.svg', 'Error', "", [], false, new ProjectDetail(["Error"], [], []))
}
