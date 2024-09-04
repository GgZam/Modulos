import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { ComponenteComponent } from './componente/componente.component';
import { IniciosesionComponent } from './componente/subcomponente/iniciosesion/iniciosesion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponenteComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    FormsModule
  ],
  exports: [
    ComponenteComponent
  ]
})
export class PersonaModule { }
