import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactComponent } from './component/contact/contact.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { DataAnalysisComponent } from './component/data-analysis/data-analysis.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'data', component: DataTableComponent },
  { path: 'dataAnalysis', component: DataAnalysisComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect from empty path
  {
    path: '**',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
