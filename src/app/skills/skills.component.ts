import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AnimationState } from './animationStates.enum';
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
      transition('* <=> *', [animate('1s 0.1s cubic-bezier(0.36, 0, 0.66, -0.56)')]),
    ]),
    trigger('showButton', [
      state('show', style({ opacity: '1' })),
      state('hide', style({ opacity: '0' })),
      transition('show => hide', [animate('0s 0s linear')]),
      transition('hide => show', [animate('0.3s 2s ease-in-out')]),
    ]),
    trigger('disappear', [
      transition(':leave', [
        style({ }),
        animate('0.3s ease-in', style({ transform: 'scale(0)' }))
      ])
    ])
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit, OnInit {
  imageString = 'assets/skills.png'

  ngOnInit(): void {
    this.loadImage()
  }

  loaded = false
  loadImage() {
    let img = new Image()
    img.onload = () => {
      this.loaded = true
    }
    img.src = this.imageString
  }

  ngAfterViewInit() {
    this.showButton = 'show'
  }

  hideButton() {
    this.showButton = 'hide'
  }

  showAgain() {
    if (this.showButton == 'hide') {
      this.showButton = 'show'
    }
  }

  currentState = AnimationState.Initial
  showButton = 'hide'
  buttonRotation = 'rotate(0)'
  containerAlignment = 'flex-end'
  
  stepForward() {
    switch (this.currentState) {
      case AnimationState.Initial:
        this.currentState = AnimationState.WebDevTools
        this.buttonRotation = 'rotate(90deg)'
        this.hideButton()
        break
      case AnimationState.WebDevTools:
        this.currentState = AnimationState.Frameworks
        this.buttonRotation = 'rotate(180deg)'
        this.containerAlignment = 'flex-start'
        this.hideButton()
        break
      case AnimationState.Frameworks:
        this.currentState = AnimationState.Backend
        this.buttonRotation = 'rotate(90deg)'
        this.hideButton()
        break
      case AnimationState.Backend:
        this.currentState = AnimationState.Tooling
        this.buttonRotation = 'rotate(-90deg)'
        this.hideButton()
        break
      case AnimationState.Tooling:
        this.currentState = AnimationState.Initial
        this.buttonRotation = 'rotate(0)'
        this.containerAlignment = 'flex-end'
        this.hideButton()
        break
    }
  }

  // stepBackwards() {
  //   switch (this.currentState) {
  //     case AnimationState.Tooling:
  //       this.currentState = AnimationState.Backend;
  //       break;
  //     case AnimationState.Backend:
  //       this.currentState = AnimationState.Frameworks;
  //       break;
  //     case AnimationState.Frameworks:
  //       this.currentState = AnimationState.WebDevTools;
  //       break;
  //     case AnimationState.WebDevTools:
  //       this.currentState = AnimationState.Initial;
  //       break;
  //     case AnimationState.Initial:
  //       break;
  //   }
  // }

}
