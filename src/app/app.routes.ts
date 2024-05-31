import { Routes } from '@angular/router';
import { MinimalLayoutComponent } from './minimal-layout/minimal-layout.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: 'skills', component: MinimalLayoutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: FullLayoutComponent},
  { path: 'contact', component: FullLayoutComponent},
  { path: '', component: FullLayoutComponent},
];
