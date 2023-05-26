import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ROUTES } from './pages/routes';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      ...ROUTES
    ]
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: (): Promise<any> => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
