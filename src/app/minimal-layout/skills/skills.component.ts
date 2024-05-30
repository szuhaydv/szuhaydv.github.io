import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  transform() {
    const container = document.querySelector('.image-container')
    if (container) {
      if (!container.classList.contains("state-two")) {
        container.classList.add("state-two")
      } else if (!container.classList.contains("state-three")) {
        container.classList.add("state-three")
      } else if (!container.classList.contains("state-four")) {
        container.classList.add("state-four")
      } else if (!container.classList.contains("state-five")) {
        container.classList.add("state-five")
      } else {
        container.classList.remove("state-five")
      }
    }
  }
}
