import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansS1Component } from './plans-s1/plans-s1.component';
import { PlansS2Component } from './plans-s2/plans-s2.component';
import { PlansFiltersComponent } from './plans-filters/plans-filters.component';
import { PlansListComponent } from './plans-list/plans-list.component';
import { PlansComponent } from './plans.component';


@NgModule({
  declarations: [
    PlansS1Component,
    PlansS2Component,
    PlansFiltersComponent,
    PlansListComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
