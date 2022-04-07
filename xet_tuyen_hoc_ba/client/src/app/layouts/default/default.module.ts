import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BridgeProgramsComponent } from 'src/app/modules/bridge-programs/bridge-programs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { NbThemeModule, NbTabsetModule, NbCardModule  } from '@nebular/theme';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BridgeProgramsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NbThemeModule.forRoot(),
    NbTabsetModule,
    NbCardModule,

  ]
})
export class DefaultModule { }
