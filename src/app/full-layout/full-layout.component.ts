import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css'
})
export class FullLayoutComponent {

}
