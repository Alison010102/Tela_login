import type { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/auth/auth').then(m => m.Auth),
  },
  {
    path: '',
    loadComponent: () => import('./pages/auth/auth').then(m => m.Auth),
  },
]
