import { Component } from '@angular/core';
import { CountUpDirective } from '../count-up.directive';
import { Framework, Capability, Project, ProjectDetail } from './projectClasses';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CountUpDirective, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  // textColor = 'black'
  // toggleTextColor() {
  //   this.textColor = this.textColor == 'black' ? 'transparent' : 'black'
  // }
  showFrameworks = false
  isAnyFrameworkSelected() {
    for (const framework of this.frameworks) {
      if (framework.isChecked) {
        return true
      }
    }
    return false
  }
  toggleFrameworks() {
    this.showFrameworks = !this.showFrameworks
  }
  leaveFrameworks() {
    if (this.showFrameworks) {
      this.showFrameworks = false
    }
  }

  frameworks = [
    new Framework(0, "React"),
    new Framework(1, "Angular"),
    new Framework(2, "Mobile")
  ]

  capabilities = [
    new Capability(0, "API Calls"),
    new Capability(1, "Full Stack"),
    new Capability(2, "Database"),
    new Capability(3, "Auth"),
    new Capability(4, "SEO"),
    new Capability(5, "Deployed"),
  ]
  showCapabilites = false
  isAnyCapabilitySelected() {
    for (const capability of this.capabilities) {
      if (capability.isChecked) {
        return true
      }
    }
    return false
  }
  numCapabilitesSelected() {
    let num  = 0
    for (const capability of this.capabilities) {
      if (capability.isChecked) {
        num += 1
      }
    }
    return num
  }
  toggleCapabilites() {
    this.showCapabilites = !this.showCapabilites
  }
  leaveCapabilities() {
    if (this.showCapabilites) {
      this.showCapabilites = false
    } 
  }

  selectFramework(id: number) {
    this.frameworks[id].isChecked = !this.frameworks  [id].isChecked
    this.filteredSearch()
  }

  selectCapability(id: number) {
    this.capabilities[id].isChecked = !this.capabilities[id].isChecked
    this.filteredSearch()
  }

  
  projectsData = [
    new Project(0, 'assets/rankmaster-web.png', 'RankMaster', 'Fully fledged SaaS tierlist minigame!', ["Angular", "Deployed", "Responsive", "API Calls", "Full Stack", "Database", "Auth"], true,
      new ProjectDetail(["RankMaster is a tierlist creator minagame, that functions as a fully-fledged SaaS with unlockable levels.", "I was inspired by Wordle, but instead of guessing words, you create a tier list and see how much your opinion differs from the community's."], ["angular.svg", "node-express.svg", "supabase.png", "vercel.svg"], ["Angular", "Node & Express", "Supabase", "Vercel"], ["Mailgun", "Stripe", "Responsive", "Auth", "Realtime"], ["mailgun.svg", "stripe.svg", "responsive.svg", "auth.svg", "realtime.png"], "https://www.figma.com/design/2Z1ssaHOQShqEJdRFQXvaK/RankMaster-(Desktop)?node-id=0-1&t=9AavLxr3WBnKL091-0"), "https://rankmaster.click/", 'https://github.com/OFFBLACKgroup/rankmaster-web'),
      new Project(1, 'assets/mr. chili.png', 'Mr. Chili', "A website for a small business in the field of chilis!", ["Angular", "Deployed", "SEO", "Responsive"], true,
        new ProjectDetail(["Mr. Chili is a website made for a client, who is in the chili sauce business.", "This site was created with careful consideration of client needs with a professional and modern design."], ["angular.svg", "supabase.png", "node-express.svg", "vercel.svg"], ["Angular", "Supabase", "Node & Express", "Vercel"], ["SEO", "Responsive"], ["seo.svg", "responsive.svg"], "https://www.figma.com/design/kc9SOe7QktNPUf6FYxI6LS/Chili-Cs%C3%A1v%C3%B3?node-id=20-2&t=lkZ3f87kPmu0mSQ9-0"), 'https://mrchili.vercel.app/', 'https://github.com/Szuhaydv/mrchili'),
    new Project(2, 'assets/mapex.png', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", ["React", "Full Stack", "Database", "API Calls", "Auth", "Deployed"], true,
      new ProjectDetail(["I always loved traveling and planning ahead what places I want to visit.", "Try it youself with username:demo123 password:123", "Mapex was born because there was simply no app on the market to display all your travel destinations on a single map."], ["react.svg", "node-express.svg", "mongodb.svg"], ["React", "Node & Express", "MongoDB"], ["Mapbox", "Stripe", "Self-written Encryption", "Netlify", "EmailJS"], ["mapbox.svg", "stripe.svg", "auth.svg", "netlify.svg", "emailjs.png"], undefined), "https://mapexsite.netlify.app/", 'https://github.com/Szuhaydv/mapex-frontend'),
    new Project(3, 'assets/newportfolio.png', 'Modern Portfolio', "This is where you are currently!", ["Angular", "Deployed"], true,
      new ProjectDetail(["A portfolio website with a modern look, I hope you like it! 😉", "It is a simple collection that links to all of my projects, but it still uses a few tricky animations and styles."], ["angular.svg"], ["Angular"], ["Responsive", "EmailJS"], ["responsive.svg", "emailjs.png"], 'https://www.figma.com/design/kXMsMjZqrwbm4eSHtve2wt/Portfolio-2?node-id=12-14&t=3hgFBlE56gwYrQ89-0'), 'https://www.szuhaydv.site/', 'https://github.com/Szuhaydv/portfolio-new'),
    new Project(4, 'assets/spacespice.png', 'Space-Spice', "A recipe search website concept for a small restaurant", ["React", "API Calls", "Deployed"], true,
      new ProjectDetail(["I always loved cooking, so it came natural that my first website that I ever published online was a recipe site!", "Space-Spice is a concept for a small restaurant that uses the Spoonacular API to query for recipes that are to your liking!"], ["react.svg", "spoonacular.svg"], ["React", "Spoonacular API"], ["Netlify"], ["netlify.svg"]), "https://space-spice.netlify.app/", 'https://github.com/Szuhaydv/space-spice'),
    new Project(5, 'assets/rankmaster.png', 'RankMaster Mobile', "A minigame app based on ranking tier lists!", ["Mobile", "Full Stack", "Database", "API Calls", "Auth"], false,
      new ProjectDetail(["RankMaster is a mobile minigame app that is based on ranking tier lists.", "It is pretty fun and a project I will definitely pursue later to see it being launched!"], ["swift.svg", "firebase.svg"], ["Swift & SwiftUI", "Firebase"], undefined, undefined, 'https://www.figma.com/design/x5pI17GpGif2Qma5rW1QzI/RankMaster-(Mobile)?node-id=0-1&t=230oLqm3MT4Hg8sr-0'), undefined, 'https://github.com/Szuhaydv/RankMaster'),
      new Project(6, 'assets/portfolio.png', 'Original Portfolio', "The original version of my portfolio website", ["React", "Deployed"], true,
        new ProjectDetail(["My Original Portfolio with features like parallax scrolling and a bunch of cool animations"],  ["react.svg"], ["React"], ["Framer Motion", "Parallax Scroll", "Responsive", "EmailJS"], ["framer motion.png", "parallax.svg", "responsive.svg", "emailjs.png"], undefined), 'https://szuhaydv-portfolio.netlify.app/', 'https://github.com/Szuhaydv/portfolio'),
    new Project(7, 'assets/cooltodo.png', 'Cool ToDo List', "My first iOS app, a nice looking todo list", ["Mobile", "Full Stack", "API Calls", "Database", "Auth"], false,
      new ProjectDetail(["Cool ToDo list was my first ever mobile app,", "It is a full stack project utilizing Firebase and it helped me learn the basics of Swift"], ["swift.svg", "firebase.svg"], ["Swift & SwiftUI", "Firebase"], undefined, undefined, 'https://www.figma.com/design/sFCO9BC7FhnQunbRHh7RU8/iOS-To-do-List?node-id=9-2&t=uU4x9avQFJPNm3or-0'), undefined, 'https://github.com/Szuhaydv/Cool-ToDo-List'),
    new Project(8, 'assets/encrypt.png', 'Encryption (self-written)', "Self written encryption and decryption protocol", ["React", "API Calls", "Auth"], false,
      new ProjectDetail(["This little project was about me trying to understand RSA & cryptography a bit more in detail.", "Using PassportJS I've written the encryption and decryption part myself utilizing the PBKDF-2 method."], ["react.svg", "node-express.svg", "mongodb.svg"], ["React", "Node & Express", "MongoDB"], ["Auth"], ["auth.svg"], 'https://www.figma.com/design/3VxyeR6OvqEtXvBlbwSTXw/TODO-list?node-id=0-1&t=lbYxjHucRpjCcOrJ-0'), undefined, 'https://github.com/Szuhaydv/todo-backend'),
    new Project(9, 'assets/mapx.png', 'MapX', "A real-life map app where fog envelops unexlplored areas", ["Mobile", "Auth"], false,
      new ProjectDetail(["MapX is one of my greatest endeavours in mobile development so far. It uses UIKit and MapKit to render and mask layers.", "It is a gamified map app where unexplored areas are enveloped in fog, and you can visit a bunch of mystery locations!"], ["swift.svg", "firebase.svg"], ["Swift & UIKit", "Firebase"], ["MapKit"], ["mapkit.png"], 'https://www.figma.com/design/TFDlKVUr0bQZptkaXPKYm1/MapX?node-id=3-120&t=V9aTg6DQz5WEJjsd-0'), undefined, 'https://github.com/Szuhaydv/MapX'),
    new Project(10, 'assets/xezame.png', 'Xezame', "A recipe website which based on ingredients in your frdige tells you recipes", [], false,
      new ProjectDetail(["Xezame is a recipe app with a twist!", "It has a special feature where you can specify all the ingredients in your fridge, and it shows you all the recipes you can make from them."], [], [])),
  ]
  
  projects = [ ...this.projectsData ]
  
  filteredSearch() {
    this.projects = [ ...this.projectsData ]
    let filteredProjects = [...this.projectsData]
    let selectedFrameworks: string[] = []
    for (const framework of this.frameworks) {
      if (framework.isChecked) {
        selectedFrameworks.push(framework.title)
      }
    }
    if (selectedFrameworks.length != 0) {
      filteredProjects = filteredProjects.filter((project) => {
        for (const tag of selectedFrameworks) {
          if (project.tags.includes(tag)) {
            return true
          }
        } 
        return false
      })
    }
    let selectedCapabilites: string[] = []
    for (const capability of this.capabilities) {
      if (capability.isChecked) {
        selectedCapabilites.push(capability.title)
      }
    }
    if (selectedCapabilites.length != 0) {
      filteredProjects = filteredProjects.filter((project) => {
        for (const tag of selectedCapabilites) {
          if (project.tags.includes(tag)) {
            return true
          }
        }
        return false
      })
    }
    this.projects = filteredProjects
  }

  codingCount = 1000
  techCount = 40
  projectCount = 10
  duration = 2000

}
