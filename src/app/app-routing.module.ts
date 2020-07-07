import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@components/home/home.component'
import { CitiesListContainerComponent } from '@components/cities-list-container/cities-list-container.component'

const routes: Routes = [
  { path: 'cities', component: CitiesListContainerComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
