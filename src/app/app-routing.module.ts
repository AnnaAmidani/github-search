import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './components/repos/repos.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: '',
    component: ReposComponent
  },
  {
    path: 'repos',
    component: ReposComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
