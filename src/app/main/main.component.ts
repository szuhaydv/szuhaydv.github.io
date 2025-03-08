import { Component } from '@angular/core';
import { CardComponent } from '../projects/card/card.component';
import { Project, ProjectDetail } from '../projects/projectClasses';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  animations: [
    trigger('scaleInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-50%) scale(0)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(-50%) scale(1)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(-50%) scale(1)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(-50%) scale(0)' }))
      ]),
    ])
  ]
})
export class MainComponent {
  router: Router

  constructor(router: Router) {
    this.router = router
  }

  showLinks = false
  toggleLinks() {
    this.showLinks = !this.showLinks
  }

  latestProjects = [
    new Project(0, 'assets/mrchili.png', 'Mr. Chili', "An ecommerce site for the best chili business in town!", ["Svelte", "Deployed", "SEO", "Responsive"], true,
      new ProjectDetail(["Mr. Chili is a website made for a client, who is in the chili sauce business.", "This site was created with careful consideration of client needs with a professional and modern design."], ["svelte.svg", "supabase.png", "node-express.svg", "vercel.svg"], ["Angular", "Supabase", "Node & Express", "Vercel"], ["SEO", "Responsive"], ["seo.svg", "responsive.svg"], "https://www.figma.com/design/kc9SOe7QktNPUf6FYxI6LS/Chili-Cs%C3%A1v%C3%B3?node-id=20-2&t=lkZ3f87kPmu0mSQ9-0"), 'https://mrchili.hu', 'https://github.com/szuhaydv/mrchili-v2'),
    new Project(2, 'assets/rankmaster-web.png', 'RankMaster', 'Fully fledged SaaS tierlist minigame!', ["Angular", "Deployed", "Responsive", "API Calls", "Full Stack", "Database", "Auth"], true,
      new ProjectDetail(["RankMaster is a tierlist creator minagame, that functions as a fully-fledged SaaS with unlockable levels.", "I was inspired by Wordle, but instead of guessing words, you create a tier list and see how much your opinion differs from the community's."], ["angular.svg", "node-express.svg", "supabase.png", "vercel.svg"], ["Angular", "Node & Express", "Supabase", "Vercel"], ["Mailgun", "Stripe", "Responsive", "Auth", "Realtime"], ["mailgun.svg", "stripe.svg", "responsive.svg", "auth.svg", "realtime.png"], "https://www.figma.com/design/2Z1ssaHOQShqEJdRFQXvaK/RankMaster-(Desktop)?node-id=0-1&t=9AavLxr3WBnKL091-0"), "https://rankmaster.click/", 'https://github.com/OFFBLACKgroup/rankmaster-web'),
    new Project(1, 'assets/mapex.png', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", ["React", "Full Stack", "Database", "API Calls", "Auth", "Deployed"], true,
      new ProjectDetail(["I always loved traveling and planning ahead what places I want to visit.", "Try it youself with username:demo123 password:123", "Mapex was born because there was simply no app on the market to display all your travel destinations on a single map."], ["react.svg", "node-express.svg", "mongodb.svg"], ["React", "Node & Express", "MongoDB"], ["Mapbox", "Stripe", "Self-written Encryption", "Netlify", "EmailJS"], ["mapbox.svg", "stripe.svg", "auth.svg", "netlify.svg", "emailjs.png"], undefined), "https://mapexsite.netlify.app/", 'https://github.com/Szuhaydv/mapex-frontend'),
  ]

  showDetails(project: Project) {
    const projectId = project.id;
    this.router.navigate(['projects', projectId]);
  }
}
