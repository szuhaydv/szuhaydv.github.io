import { Component } from '@angular/core';
import { CardComponent } from '../../projects/card/card.component';
import { Project, ProjectDetail } from '../../projects/projectClasses';
import { NavigationExtras, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  router: Router

  constructor(router: Router) {
    this.router = router
  }

  latestProjects = [
    new Project(1, 'assets/mapex.png', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", ["React", "Full Stack", "Database", "API Calls", "Auth", "Deployed"], true,
      new ProjectDetail(["I always loved traveling and planning ahead what places I want to visit.", "Mapex was born because there was simply no app on the market to display all your travel destinations on a single map."], ["react.svg", "node-express.svg", "mongodb.svg"], ["React", "Node & Express", "MongoDB"], ["Mapbox", "Stripe", "Self-written Encryption", "Netlify", "EmailJS"], ["mapbox.svg", "stripe.svg", "auth.svg", "netlify.svg", "emailjs.png"], undefined), "https://mapexsite.netlify.app/", 'https://github.com/Szuhaydv/mapex-frontend'),
    new Project(2, 'assets/newportfolio.png', 'Modern Portfolio', "This is where you are currently!", ["Angular", "Deployed"], true,
      new ProjectDetail(["A portfolio website with a modern look, I hope you like it! 😉", "It is a simple collection that links to all of my projects, but it still uses a few tricky animations and styles."], ["angular.svg"], ["Angular"], ["Responsive", "EmailJS"], ["responsive.svg", "emailjs.png"], ''), undefined, 'https://github.com/Szuhaydv/portfolio-new'),
    new Project(4, 'assets/rankmaster.png', 'RankMaster', "A minigame app based on ranking tier lists!", ["Mobile", "Full Stack", "Database", "API Calls", "Auth"], false,
      new ProjectDetail(["RankMaster is a mobile minigame app that is based on ranking tier lists.", "It is pretty fun and a project I will definitely pursue later to see it being launched!"], ["swift.svg", "firebase.svg"], ["Swift & SwiftUI", "Firebase"], undefined, undefined, ''), undefined, 'https://github.com/Szuhaydv/RankMaster'),
  ]

  showDetails(project: Project) {
    const projectId = project.id;
    this.router.navigate(['projects', projectId]);
  }
}
