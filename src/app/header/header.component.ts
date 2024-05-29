import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSidebar = false
  isDropdownActive = false

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
    } else {
      document.documentElement.style.setProperty('--clr-black-white', '#fff')
      document.documentElement.style.setProperty('--clr-background', '#ebf6f7')
      document.documentElement.style.setProperty('--clr-header', '#28282B')
      document.documentElement.style.setProperty('--clr-bnw-inverse', '#000')
    }
    this.lightMode = !this.lightMode
  }
}
