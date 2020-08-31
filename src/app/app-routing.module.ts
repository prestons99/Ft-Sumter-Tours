import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
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
  },  {
    path: 'amenities',
    loadChildren: () => import('./amenities/amenities.module').then( m => m.AmenitiesPageModule)
  },
  {
    path: 'beacon-locations',
    loadChildren: () => import('./beacon-locations/beacon-locations.module').then( m => m.BeaconLocationsPageModule)
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
    path: 'barnacle',
    loadChildren: () => import('./barnacle/barnacle.module').then( m => m.BarnaclePageModule)
  },
  {
    path: 'bottlenose',
    loadChildren: () => import('./bottlenose/bottlenose.module').then( m => m.BottlenosePageModule)
  },
  {
    path: 'pelican',
    loadChildren: () => import('./pelican/pelican.module').then( m => m.PelicanPageModule)
  },
  {
    path: 'cannonball',
    loadChildren: () => import('./cannonball/cannonball.module').then( m => m.CannonballPageModule)
  },
  {
    path: 'horseshoe',
    loadChildren: () => import('./horseshoe/horseshoe.module').then( m => m.HorseshoePageModule)
  },
  {
    path: 'laughing',
    loadChildren: () => import('./laughing/laughing.module').then( m => m.LaughingPageModule)
  },
  {
    path: 'loggerhead',
    loadChildren: () => import('./loggerhead/loggerhead.module').then( m => m.LoggerheadPageModule)
  },
  {
    path: 'manatee',
    loadChildren: () => import('./manatee/manatee.module').then( m => m.ManateePageModule)
  },
  {
    path: 'moon',
    loadChildren: () => import('./moon/moon.module').then( m => m.MoonPageModule)
  },
  {
    path: 'otter',
    loadChildren: () => import('./otter/otter.module').then( m => m.OtterPageModule)
  },
  {
    path: 'osprey',
    loadChildren: () => import('./osprey/osprey.module').then( m => m.OspreyPageModule)
  },
  {
    path: 'oyster',
    loadChildren: () => import('./oyster/oyster.module').then( m => m.OysterPageModule)
  },
  {
    path: 'drum',
    loadChildren: () => import('./drum/drum.module').then( m => m.DrumPageModule)
  },
  {
    path: 'fiddler',
    loadChildren: () => import('./fiddler/fiddler.module').then( m => m.FiddlerPageModule)
  },
  {
    path: 'egret',
    loadChildren: () => import('./egret/egret.module').then( m => m.EgretPageModule)
  },
  {
    path: 'spirit-lowcountry',
    loadChildren: () => import('./spirit-lowcountry/spirit-lowcountry.module').then( m => m.SpiritLowcountryPageModule)
  },
  {
    path: 'spirit-charleston',
    loadChildren: () => import('./spirit-charleston/spirit-charleston.module').then( m => m.SpiritCharlestonPageModule)
  },
  {
    path: 'spirit-low-amenities',
    loadChildren: () => import('./spirit-low-amenities/spirit-low-amenities.module').then( m => m.SpiritLowAmenitiesPageModule)
  },
  {
    path: 'spirit-chs-amenities',
    loadChildren: () => import('./spirit-chs-amenities/spirit-chs-amenities.module').then( m => m.SpiritChsAmenitiesPageModule)
  },
  {
    path: 'construction',
    loadChildren: () => import('./construction/construction.module').then( m => m.ConstructionPageModule)
  },
  {
    path: 'first-battle',
    loadChildren: () => import('./first-battle/first-battle.module').then( m => m.FirstBattlePageModule)
  },
  {
    path: 'struggle',
    loadChildren: () => import('./struggle/struggle.module').then( m => m.StrugglePageModule)
  },
  {
    path: 'after',
    loadChildren: () => import('./after/after.module').then( m => m.AfterPageModule)
  },
  {
    path: 'tours3d',
    loadChildren: () => import('./tours3d/tours3d.module').then( m => m.Tours3dPageModule)
  },
  {
    path: 'castle-pickney',
    loadChildren: () => import('./castle-pickney/castle-pickney.module').then( m => m.CastlePickneyPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
