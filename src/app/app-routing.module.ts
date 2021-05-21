import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'amenities',
    loadChildren: () => import('./amenities/amenities.module').then( m => m.AmenitiesPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'our-impact',
    loadChildren: () => import('./our-impact/our-impact.module').then( m => m.OurImpactPageModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module').then( m => m.AnimalsPageModule)
  },
  {
    path: 'tours3d',
    loadChildren: () => import('./tours3d/tours3d.module').then( m => m.Tours3dPageModule)
  },
  {
    path: 'animal-view',
    loadChildren: () => import('./animal-view/animal-view.module').then( m => m.AnimalViewPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'our-fleet-boat',
    loadChildren: () => import('./our-fleet-boat/our-fleet-boat.module').then( m => m.OurFleetBoatPageModule)
  },
  {
    path: 'boat-amenities',
    loadChildren: () => import('./boat-amenities/boat-amenities.module').then( m => m.BoatAmenitiesPageModule)
  },
  {
    path: 'overview-item',
    loadChildren: () => import('./overview-item/overview-item.module').then( m => m.OverviewItemPageModule)
  },
  {
    path: 'fort-sumter-image-view',
    loadChildren: () => import('./fort-sumter-image-view/fort-sumter-image-view.module').then( m => m.FortSumterImageViewPageModule)
  },
  {
    path: 'time-travel',
    loadChildren: () => import('./time-travel/time-travel.module').then( m => m.TimeTravelPageModule)
  },
  {
    path: 'time-machine',
    loadChildren: () => import('./time-machine/time-machine.module').then( m => m.TimeMachinePageModule)
  },  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'info-page',
    loadChildren: () => import('./info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
  {
    path: 'info-page',
    loadChildren: () => import('./info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
