import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personas } from '../datasource/personainterface';

@Component({
  selector: 'app-modalpersonas',
  templateUrl: './modalpersonas.component.html',
  styles: ``
})
export class ModalpersonasComponent {

  @Input()
  modalid: string = 'modalejemplo';

  @Input()
  datosPersona: Personas = {
    id: 0,
    identificacion: '',
    nombres: '',
    edad: 0,
    email: '',
    celular: '',
  };

  @Output()
  eventoGuardar = new EventEmitter<Personas>();

  guardar() {
    this.eventoGuardar.emit(this.datosPersona);
    this.cerrarModal();
  }

  cerrarModal() {
    let btnCerrar = document.getElementById('btnCerrar');
    if (btnCerrar) {
      btnCerrar?.click();
    }
  }

}
