import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-minimal-layout',
  standalone: true,
  imports: [SkillsComponent, HeaderComponent],
  templateUrl: './minimal-layout.component.html',
  styleUrl: './minimal-layout.component.css'
})
export class MinimalLayoutComponent {

}
