import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home-directory/home/home.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 

  }, 
  {
    path: 'search/:game-search', 
    component: HomeComponent, 
  }, 

  {
    path: 'details/id', 
    component: DetailsComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
