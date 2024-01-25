import { Routes } from '@angular/router';
import { LabComponent } from './pages/lab/lab.component';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "lab", component: LabComponent },
  { path: "list", component: ListComponent },
  { path: "form", component: FormComponent }
];
