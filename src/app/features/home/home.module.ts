import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CanvasBallsComponent } from './components/canvas-balls/canvas-balls.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { InterviewedGridComponent } from './components/interviewed-grid/interviewed-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    CanvasBallsComponent,
    InterviewedGridComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
