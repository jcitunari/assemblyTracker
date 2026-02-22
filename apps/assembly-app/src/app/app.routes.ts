import { Route } from '@angular/router';
import {PublicLayoutComponent} from "./layouts/public-layout/public-layout.component";
import {SecureLayoutComponent} from "./layouts/secure-layout/secure-layout.component";
import {AuthGuard} from "./core/services/auth.service";

export const appRoutes: Route[] = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('./features/auth/auth-routing.module').then(m => m.AuthRoutingModule) }
    ]
  },
  {
    path: '',
    component: SecureLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

