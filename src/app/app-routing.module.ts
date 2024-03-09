import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent)
      },

      {
        path: 'sign-up',
        loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent)
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  {
    path: "**", redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
