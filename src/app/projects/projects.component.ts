import { Component } from '@angular/core';
import { CountUpDirective } from '../count-up.directive';
import { Framework, Capability, Project } from './filterClasses';
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
    this.filteredSearch()
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
    this.filteredSearch()
    if (this.showCapabilites) {
      this.showCapabilites = false
    } 
  }

  selectFramework(id: number) {
    this.frameworks[id].isChecked = !this.frameworks  [id].isChecked
  }

  selectCapability(id: number) {
    this.capabilities[id].isChecked = !this.capabilities[id].isChecked
  }

  
  projectsData = [
    new Project(0, 'assets/portfolio.png', 'https://github.com/Szuhaydv/portfolio', 'Original Portfolio', "The original version of my portfolio website", ["React", "Deployed"], true),
    new Project(1, 'assets/mapex.png', 'https://github.com/Szuhaydv/mapex-frontend', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", ["React", "Full Stack", "Database", "API Calls", "Auth", "Deployed"], true, "https://mapexsite.netlify.app/"),
    new Project(2, 'assets/newportfolio.png', 'https://github.com/Szuhaydv/portfolio-new', 'Modern Portfolio', "This is where you are currently!", ["Angular", "Deployed"], true),
    new Project(3, 'assets/spacespice.png', 'https://github.com/Szuhaydv/space-spice', 'Space-Spice', "A recipe search website concept for a small restaurant", ["React", "API Calls", "Deployed"], true, "https://space-spice.netlify.app/"),
    new Project(4, 'assets/rankmaster.png', 'https://github.com/Szuhaydv/RankMaster', 'RankMaster', "A minigame app based on ranking tier lists!", ["Mobile", "Full Stack", "Database", "API Calls", "Auth"], false),
    new Project(5, 'assets/portfolio.png', '', 'Mr. Chili', "A website for a small business in the field of chilis!", ["Angular", "Deployed", "SEO"], true),
    new Project(6, 'assets/cooltodo.png', 'https://github.com/Szuhaydv/Cool-ToDo-List', 'Cool ToDo List', "My first iOS app, a nice looking todo list", ["Mobile", "Full Stack", "API Calls", "Database", "Auth"], false),
    new Project(7, 'assets/encrypt.png', 'https://github.com/Szuhaydv/todo-backend', 'Encryption (self-written)', "Self written encryption and decryption protocol", ["React", "API Calls", "Auth"], false),
    new Project(8, 'assets/mapx.png', 'https://github.com/Szuhaydv/MapX', 'MapX', "A real-life map app where fog envelops unexlplored areas", ["Mobile", "Auth"], false),
    new Project(9, 'assets/xezame.png', '', 'Xezame', "A recipe website which based on ingredients in your frdige tells you recipes", [], false),
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
