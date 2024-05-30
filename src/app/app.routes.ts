import { Routes } from '@angular/router';
import { MinimalLayoutComponent } from './minimal-layout/minimal-layout.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';

export const routes: Routes = [
  { path: 'skills', component: MinimalLayoutComponent},
  { path: '', component: FullLayoutComponent}
];
