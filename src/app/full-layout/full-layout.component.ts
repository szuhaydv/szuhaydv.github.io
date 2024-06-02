import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MainComponent } from './main/main.component';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css',
  animations: [
    trigger('buttonHover', [
      transition(':hover', [
        animate('0.1s ease-in-out', style({ transform: 'rotate(5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(-5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(-5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(0deg)' })),
      ]),
    ]),
  ],
})
export class FullLayoutComponent {

}
