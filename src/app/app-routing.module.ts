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
  },  {
    path: 'seccion-perruna',
    loadChildren: () => import('./pages/seccion-perruna/seccion-perruna.module').then( m => m.SeccionPerrunaPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'modificar-usuario',
    loadChildren: () => import('./pages/modificar-usuario/modificar-usuario.module').then( m => m.ModificarUsuarioPageModule)
  },
  {
    path: 'mod-contrasena',
    loadChildren: () => import('./pages/mod-contrasena/mod-contrasena.module').then( m => m.ModContrasenaPageModule)
  },
  {
    path: 'seccion-gatuna',
    loadChildren: () => import('./pages/seccion-gatuna/seccion-gatuna.module').then( m => m.SeccionGatunaPageModule)
  },
  {
    path: 'seccion-otros',
    loadChildren: () => import('./pages/seccion-otros/seccion-otros.module').then( m => m.SeccionOtrosPageModule)
  },
  {
    path: 'listarp',
    loadChildren: () => import('./pages/listarp/listarp.module').then( m => m.ListarpPageModule)
  },
  {
    path: 'agregarpro',
    loadChildren: () => import('./pages/agregarpro/agregarpro.module').then( m => m.AgregarproPageModule)
  },
  {
    path: 'listarus',
    loadChildren: () => import('./pages/listarus/listarus.module').then( m => m.ListarusPageModule)
  },
  {
    path: 'agregarus',
    loadChildren: () => import('./pages/agregarus/agregarus.module').then( m => m.AgregarusPageModule)
  },
  {
    path: 'modificarpro',
    loadChildren: () => import('./pages/modificarpro/modificarpro.module').then( m => m.ModificarproPageModule)
  },
  {
    path: 'modificarus',
    loadChildren: () => import('./pages/modificarus/modificarus.module').then( m => m.ModificarusPageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
