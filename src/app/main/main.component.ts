import { Component } from '@angular/core';
import { CardComponent } from '../projects/card/card.component';
import { Project, ProjectDetail } from '../projects/projectClasses';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  router: Router

  constructor(router: Router) {
    this.router = router
  }

  latestProjects = [
    new Project(5, 'assets/mr. chili.png', 'Mr. Chili', "A website for a small business in the field of chilis!", ["Angular", "Deployed", "SEO", "Responsive"], true,
      new ProjectDetail(["Mr. Chili is a website made for a client, who is in the chili sauce business.", "This site was created with careful consideration of client needs with a professional and modern design."], ["angular.svg"], ["Angular"], ["SEO", "Responsive"], ["seo.svg", "responsive.svg"], "https://www.figma.com/design/kc9SOe7QktNPUf6FYxI6LS/Chili-Cs%C3%A1v%C3%B3?node-id=20-2&t=lkZ3f87kPmu0mSQ9-0"), 'https://mrchili.vercel.app/', 'https://github.com/Szuhaydv/mrchili'),
    new Project(1, 'assets/mapex.png', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", ["React", "Full Stack", "Database", "API Calls", "Auth", "Deployed"], true,
      new ProjectDetail(["I always loved traveling and planning ahead what places I want to visit.", "Mapex was born because there was simply no app on the market to display all your travel destinations on a single map."], ["react.svg", "node-express.svg", "mongodb.svg"], ["React", "Node & Express", "MongoDB"], ["Mapbox", "Stripe", "Self-written Encryption", "Netlify", "EmailJS"], ["mapbox.svg", "stripe.svg", "auth.svg", "netlify.svg", "emailjs.png"], undefined), "https://mapexsite.netlify.app/", 'https://github.com/Szuhaydv/mapex-frontend'),
    new Project(4, 'assets/rankmaster.png', 'RankMaster', "A minigame app based on ranking tier lists!", ["Mobile", "Full Stack", "Database", "API Calls", "Auth"], false,
      new ProjectDetail(["RankMaster is a mobile minigame app that is based on ranking tier lists.", "It is pretty fun and a project I will definitely pursue later to see it being launched!"], ["swift.svg", "firebase.svg"], ["Swift & SwiftUI", "Firebase"], undefined, undefined, ''), undefined, 'https://github.com/Szuhaydv/RankMaster'),
  ]

  showDetails(project: Project) {
    const projectId = project.id;
    this.router.navigate(['projects', projectId]);
  }
}
