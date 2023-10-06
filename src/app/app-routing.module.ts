import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProjectspageComponent } from './projectspage/projectspage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  /*Add home screen*/
  { path: '', component: HomepageComponent}
  // { path: 'projects', component: ProjectspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
