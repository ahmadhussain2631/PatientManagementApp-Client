import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'patient-list',
    loadComponent: () => import('../app/standalone-components/patient-list/patient-list.component').then(m => m.PatientListComponent)
  },
  {
    path: 'add-patient',
    loadComponent: () => import('../app/standalone-components/patient-form/patient-form.component').then(m => m.PatientFormComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
