import { Component } from '@angular/core';
import { CountUpDirective } from '../count-up.directive';
import { Frameworks, Framework, Capability, Project } from './filterClasses';
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
    for (const framework of this.frameworks.frameworks) {
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

  frameworks = new Frameworks([
      new Framework(0, "React"),
      new Framework(1, "Angular"),
      new Framework(2, "Mobile")
    ]
  )
  capabilities = [
    new Capability(0, "API calls"),
    new Capability(1, "FullStack"),
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
    this.frameworks.isChecked = id
  }

  selectCapability(id: number) {
    this.capabilities[id].isChecked = !this.capabilities[id].isChecked
  }

  projects = [
    new Project(0, 'assets/portfolio.png', 'Original Portfolio', "The original version of my portfolio website", true),
    new Project(1, 'assets/mapex.png', 'Mapex', "Pindrop your favourite travel destinations and create beautiful maps to share!", true),
    new Project(2, 'assets/portfolio.png', 'Modern Portfolio', "This is where you are currently!", true),
    new Project(3, 'assets/portfolio.png', 'Space-Spice', "A recipe search website concept for a small restaurant", true),
    new Project(4, 'assets/portfolio.png', 'RankMaster', "A minigame app based on ranking tier lists!", true),
    new Project(5, 'assets/portfolio.png', 'Mr. Chili', "A website for a small business in the field of chilis!", true),
    new Project(6, 'assets/portfolio.png', 'Cool ToDo List', "My first iOS app, a nice looking todo list", false),
    new Project(7, 'assets/portfolio.png', 'Encryption (self-written)', "Self written encryption and decryption protocol", false),
    new Project(8, 'assets/portfolio.png', 'MapX', "A real-life map app where fog envelops unexlplored areas", false),
    new Project(9, 'assets/portfolio.png', 'Xezame', "A recipe website which based on ingredients in your frdige tells you recipes", false),
  ]

  codingCount = 1000
  techCount = 40
  projectCount = 10
  duration = 2000


}
