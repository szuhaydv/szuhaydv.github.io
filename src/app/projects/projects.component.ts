import { Component } from '@angular/core';
import { CountUpDirective } from '../count-up.directive';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  codingCount = 1000
  techCount = 40
  projectCount = 10
  duration = 2000


}
