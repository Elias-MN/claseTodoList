import { Routes } from '@angular/router';
import { LabComponent } from './pages/lab/lab.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "lab", component: LabComponent },
  { path: "list", component: ListComponent }
];
