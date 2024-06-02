import { Component, Input } from '@angular/core';
import { Project } from '../filterClasses';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: Project = new Project(Math.random()*1000, 'assets/error.svg', 'Error', "", [], false)
}
