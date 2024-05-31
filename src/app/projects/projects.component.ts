import { Component } from '@angular/core';
import { CountUpDirective } from '../count-up.directive';
import { Frameworks, Framework, Capability } from './filterClasses';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CountUpDirective],
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
    new Capability(0, "FullStack"),
    new Capability(1, "Database"),
    new Capability(2, "Auth"),
    new Capability(3, "SEO"),
    new Capability(4, "Deployed"),
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

  codingCount = 1000
  techCount = 40
  projectCount = 10
  duration = 2000


}
