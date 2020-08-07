import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
<<<<<<< HEAD
  },
  {
    path: 'our-fleet',
    loadChildren: () => import('./our-fleet/our-fleet.module').then( m => m.OurFleetPageModule)
  },
  {
    path: 'fort-sumter',
    loadChildren: () => import('./fort-sumter/fort-sumter.module').then( m => m.FortSumterPageModule)
  },
  {
    path: 'marine-life',
    loadChildren: () => import('./marine-life/marine-life.module').then( m => m.MarineLifePageModule)
  },
  {
    path: 'routes',
    loadChildren: () => import('./routes/routes.module').then( m => m.RoutesPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
=======
>>>>>>> 7fcbde5618bfae2fed6987315e9bd33bb1e50c0a
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
