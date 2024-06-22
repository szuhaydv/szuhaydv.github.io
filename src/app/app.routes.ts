import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SkillsComponent } from './skills/skills.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: MainComponent},
];
