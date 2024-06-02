import { Component } from '@angular/core';
import { CardComponent } from '../../projects/card/card.component';
import { Project } from '../../projects/filterClasses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  latestProjects = [
    new Project(1, 'assets/mapex.png', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", ["React", "Full Stack", "Database", "API Calls", "Auth", "Deployed"], true, "https://mapexsite.netlify.app/"),
    new Project(2, 'assets/newportfolio.png', 'Modern Portfolio', "This is where you are currently!", ["Angular", "Deployed"], true, undefined),
    new Project(4, 'assets/rankmaster.png', 'RankMaster', "A minigame app based on ranking tier lists!", ["Mobile", "Full Stack", "Database", "API Calls", "Auth"], false, undefined),
  ]
}
