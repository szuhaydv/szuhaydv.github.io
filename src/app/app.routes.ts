import { Routes } from '@angular/router';
import { MinimalLayoutComponent } from './minimal-layout/minimal-layout.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'skills', component: MinimalLayoutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: FullLayoutComponent},
];
