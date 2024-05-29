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
}
