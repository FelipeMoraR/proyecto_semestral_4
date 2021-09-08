import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./pages/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'recuperacion2',
    loadChildren: () => import('./pages/recuperacion2/recuperacion2.module').then( m => m.Recuperacion2PageModule)
  },
  {
    path: 'recuperacion3',
    loadChildren: () => import('./pages/recuperacion3/recuperacion3.module').then( m => m.Recuperacion3PageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
