import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: 'layout', pathMatch:'full'},//Default route
  {path: 'layout', component: LayoutComponent},
  {path: 'layout', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
