import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalpersonasComponent } from './subcomponente/modalpersonas/modalpersonas.component';
import { Personas } from './subcomponente/datasource/personainterface';
import { lpersonas } from './subcomponente/datasource/list_personas';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  providers: [Router]
})
export class MantenimientoComponent {

  @ViewChild(ModalpersonasComponent) modalPersonaComponent!: ModalpersonasComponent;

  datosPersona: Personas[] = lpersonas;
  usuario: string = 'Dev Bootcamp';

  guardarPersona(persona: Personas) {
    if (persona.id == 0) {
      persona.id = lpersonas.length + 1
    }
    lpersonas.push(persona);
  }


}
