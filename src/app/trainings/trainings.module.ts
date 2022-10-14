import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsS1Component } from './trainings-s1/trainings-s1.component';
import { TrainingsS2Component } from './trainings-s2/trainings-s2.component';
import { TrainingsFiltersComponent } from './trainings-filters/trainings-filters.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { TrainingsComponent } from './trainings.component';


@NgModule({
  declarations: [
    TrainingsS1Component,
    TrainingsS2Component,
    TrainingsFiltersComponent,
    TrainingsListComponent,
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule
  ]
})
export class TrainingsModule { }
