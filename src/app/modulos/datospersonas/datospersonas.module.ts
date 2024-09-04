import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatospersonasRoutingModule } from './datospersonas-routing.module';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ModalpersonasComponent } from './mantenimiento/subcomponente/modalpersonas/modalpersonas.component';


@NgModule({
  declarations: [
    MantenimientoComponent,
    ModalpersonasComponent
  ],
  imports: [
    CommonModule,
    DatospersonasRoutingModule
  ],
  exports: [
    MantenimientoComponent
  ]
})
export class DatospersonasModule { }
