import { Component } from '@angular/core';
import { AnimationState, KeyRotation } from './animationStates.enum';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  animations: [
    trigger('step', [
      state('initial', style({ transform: 'translateX(-3%)' })),
      state('webdev', style({ transform: 'translate(-40%, -10%)' })),
      state('framework', style({ transform: 'translate(-45%, -40%)' })),
      state('backend', style({ transform: 'translate(-10%, -35%)' })),
      state('tooling', style({ transform: 'translate(-7.5%, -70%)' })),
      transition('* <=> *', [animate('0.3s 0.1s ease-in-out')]),
    ]),
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  currentState = AnimationState.Initial
  
  stepForward() {
    switch (this.currentState) {
      case AnimationState.Initial:
        this.currentState = AnimationState.WebDevTools
        break
      case AnimationState.WebDevTools:
        this.currentState = AnimationState.Frameworks
        break
      case AnimationState.Frameworks:
        this.currentState = AnimationState.Backend
        break
      case AnimationState.Backend:
        this.currentState = AnimationState.Tooling
        break
      case AnimationState.Tooling:
        break
    }
  }

  stepBackwards() {
    switch (this.currentState) {
      case AnimationState.Tooling:
        this.currentState = AnimationState.Backend;
        break;
      case AnimationState.Backend:
        this.currentState = AnimationState.Frameworks;
        break;
      case AnimationState.Frameworks:
        this.currentState = AnimationState.WebDevTools;
        break;
      case AnimationState.WebDevTools:
        this.currentState = AnimationState.Initial;
        break;
      case AnimationState.Initial:
        break;
    }
  }

}
