import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactComponent } from './component/contact/contact.component';
import { DataTableComponent } from './component/data-table/data-table.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'contact', component:ContactComponent},
  {path:'data', component:DataTableComponent},
  { path: '', redirectTo: '/data', pathMatch: 'full' } // Redirect from empty path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
