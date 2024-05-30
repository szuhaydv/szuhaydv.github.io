import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'skills', component: SkillsComponent},
  { path: '', component: MainComponent}
];
