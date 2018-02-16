import {RouterModule, Routes} from '@angular/router';
import {AssetsComponent} from './assets/assets.component';
import {SignInComponent} from './account/sign-in/sign-in.component';
import {SignUpComponent} from './account/sign-up/sign-up.component';
import {LostPasswordComponent} from './account/lost-password/lost-password.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {LogedinGuard} from './shared/guards/logedin.guard';
import {PlatformComponent} from './platform/platform.component';
import {ProfileComponent} from './account/profile/profile.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {OverviewComponent} from './assets/overview/overview.component';
import {PlatsbankenComponent} from './assets/platsbanken/platsbanken.component';
import {OntologyComponent} from './assets/ontology/ontology.component';
import {OccupationForecastsComponent} from './assets/occupation-forecasts/occupation-forecasts.component';
import {OccupationsComponent} from './assets/occupations/occupations.component';
import {HistoricalJobPostingsComponent} from './assets/historical-job-postings/historical-job-postings.component';

const routes: Routes = [
  // { path: '', redirectTo: 'race-list', pathMatch: 'full' },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'assets/overview', component: OverviewComponent},
  {
    path: 'assets', 
    component: AssetsComponent,
    children: [   
       {path: '', redirectTo: 'overview', pathMatch: 'full' },  
      // {path: '', component: OverviewComponent},
      // {path: 'overview', redirectTo: '', pathMatch: 'full' },
      {path: 'platsbanken', component: PlatsbankenComponent},
      {path: 'occupation-forecasts', component: OccupationForecastsComponent},
      {path: 'occupations', component: OccupationsComponent},
      {path: 'historical-job-postings', component: HistoricalJobPostingsComponent},
      {path: 'ontology', component: OntologyComponent},      
    ]
  },  
  {path: 'news', component: NewsComponent},
  {path: 'platform', component: PlatformComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [LogedinGuard]},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'showcase', component: ShowcaseComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
