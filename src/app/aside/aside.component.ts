import { Component } from '@angular/core';
import { trigger, transition, style, animate, sequence, state } from '@angular/animations';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
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
export class AsideComponent {
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
