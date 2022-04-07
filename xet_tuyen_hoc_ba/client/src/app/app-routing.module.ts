import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { BridgeProgramsComponent } from './modules/bridge-programs/bridge-programs.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{
  path: '', // localhost:4200/ mac dinh la load DefaultComponent
  component: DefaultComponent,
  children: [
  {
    path: '', // localhost:4200/<path cua defaultComponent>/ mac dinh la load DashboardComponent
    component: DashboardComponent
  },
  {
    path: 'bridge_programs', // localhost:4200/main la load BridgeProgramsComponent
    component: BridgeProgramsComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
