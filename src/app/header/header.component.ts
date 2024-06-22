import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSidebar = false
  isDropdownActive = false

  pageTitles = ["Home", "Skills", "Projects", "About", "Contact"]
  pageTitleWidths: number[] = []
  decoratorOffset = 0

  ngOnInit() {
    this.calculateDecoratorOffset(this.decoratorOffset);
  }

  calculateDecoratorOffset(id: number) {
    if (this.pageTitleWidths.length == 0) {
      document.querySelectorAll('.pc-header .page-title').forEach(listElement => {
        this.pageTitleWidths.push((listElement as HTMLElement).offsetWidth)
      })
    } 
    let offset = this.pageTitleWidths[0] / 2
    for (let i = 0; i < id; i++) {
      offset += this.pageTitleWidths[i] / 2 + this.pageTitleWidths[i + 1] / 2
    }
    this.decoratorOffset = offset
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar
  }

  showDropdown() {
    this.isDropdownActive = true
  }

  hideDropdown() {
    this.isDropdownActive = false
  }

  lightMode = true

  updateColorScheme() {
    if (this.lightMode) {
      document.documentElement.style.setProperty('--clr-black-white', '#000')
      document.documentElement.style.setProperty('--clr-background', '#181823')
      document.documentElement.style.setProperty('--clr-header', '#210062')
      document.documentElement.style.setProperty('--clr-bnw-inverse', '#fff')
      document.documentElement.style.setProperty('--clr-highlight', '#2200b9')
    } else {
      document.documentElement.style.setProperty('--clr-black-white', '#fff')
      document.documentElement.style.setProperty('--clr-background', '#ebf6f7')
      document.documentElement.style.setProperty('--clr-header', '#28282B')
      document.documentElement.style.setProperty('--clr-bnw-inverse', '#000')
      document.documentElement.style.setProperty('--clr-highlight', '#343438')
    }
    this.lightMode = !this.lightMode
  }
}
