import { Component, HostBinding } from '@angular/core';
import { MainComponent } from './main/main.component';
import { trigger, transition, style, animate, sequence, state } from '@angular/animations';
@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css',
  animations: [
    trigger('buzz', [
      state('initial', style({ transform: 'rotate(0)'})),
      state('buzzed', style({ transform: 'rotate(0)'})),
      transition('initial => buzzed', [
          style({ transform: 'scale(1.1)' }),
          animate('0.1s ease-in-out', style({ transform: 'scale(1.1) rotate(5deg)' })),
          animate('0.1s ease-in-out', style({ transform: 'scale(1.1) rotate(-5deg)' })),
          animate('0.1s ease-in-out', style({ transform: 'scale(1.1) rotate(5deg)' })),
          animate('0.1s ease-in-out', style({ transform: 'scale(1.1) rotate(-5deg)' })),
          animate('0.1s ease-in-out', style({ transform: 'scale(1.1) rotate(0deg)' })),
      ]),
    ]),
  ],
})
export class FullLayoutComponent {
  githubState = 'initial'
  linkedinState = 'initial'
  gmailState = 'initial'


  githubHover() {
    this.githubState = 'buzzed'
  }
  gmailHover() {
    this.gmailState = 'buzzed'
  }
  linkedinHover() {
    this.linkedinState = 'buzzed'
  }
  githubHoverEnded() {
    this.githubState = 'initial'
  }
  linkedinHoverEnded() {
    this.linkedinState = 'initial'
  }
  gmailHoverEnded() {
    this.gmailState = 'initial'
  }


}
