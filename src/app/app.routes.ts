import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { RegistrationAllotmentComponent } from './pages/forms/registration-allotment/registration-allotment';
import { RegistrationAllotmentV2Component } from './pages/forms/registration-allotment-v2/registration-allotment-v2';
import { PlaceholderComponent } from './shared/placeholder/placeholder';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'registration-allotment',
    component: RegistrationAllotmentComponent
  },

  {
    path: 'registration-allotment-v2',
    component: RegistrationAllotmentV2Component
  },

  // Placeholder routes for future forms (sidebar nav items)
  { path: 'trailer-operations', component: PlaceholderComponent },
  { path: 'road-movement', component: PlaceholderComponent },
  { path: 'other-operations', component: PlaceholderComponent },
  { path: 'outward', component: PlaceholderComponent }, // For Outward section
  { path: 'inward', component: PlaceholderComponent },   // For Inward section
  { path: 'train-ship', component: PlaceholderComponent }, // For Train/Ship section
  { path: 'pft-coastal-coal', component: PlaceholderComponent }, // For PFT/Coastal/Coal
  { path: 'job-orders', component: PlaceholderComponent }, // For Job Orders
  { path: 'gate', component: PlaceholderComponent }, // For Gate
  { path: 'stack', component: PlaceholderComponent }, // For Stack
  { path: 'miscellaneous', component: PlaceholderComponent }, // For Miscellaneous
  { path: 'cut-in', component: PlaceholderComponent }, // For Cut In
  { path: 'warehouse', component: PlaceholderComponent }, // For Warehouse
  { path: 'mis', component: PlaceholderComponent }, // For MIS
  { path: 'supervisory-tasks', component: PlaceholderComponent }, // For Supervisory Tasks
  { path: 'master-maintenance', component: PlaceholderComponent }, // For Master Maintenance
  { path: 'help', component: PlaceholderComponent }, // For Help

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];