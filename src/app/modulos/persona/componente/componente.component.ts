import { Component, ViewChild } from '@angular/core';
import { IniciosesionComponent } from './subcomponente/iniciosesion/iniciosesion.component';
import { Router } from '@angular/router';
import { MantenimientoComponent } from '../../datospersonas/mantenimiento/mantenimiento.component';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  providers: [Router]
})
export class ComponenteComponent {

  constructor(private router: Router) {
  }

  @ViewChild(IniciosesionComponent, { static: false })
  inicioSesionComponente!: IniciosesionComponent;

  @ViewChild(MantenimientoComponent, { static: false })
  mantenimientoComponent!: MantenimientoComponent;

  private emailusuario: string = 'vmtdev@mail.com';

  private passwordusuario: string = '123456.';

  private nameuser: string = 'Dev Bootcamp';

  usuario: string = 'Dev Bootcamp';

  login() {
    if (this.inicioSesionComponente.emailusuario === this.emailusuario && this.inicioSesionComponente.nameuser === this.nameuser) {
      if (this.inicioSesionComponente.passwordusuario === this.passwordusuario) {
        this.router.navigate(['/datospersonas']);
      } else {
        this.mensajeAlerta("Contrasenia incorrecta");
      }
    } else {
      this.mensajeError("Usuario incorrecto");
    }
  }

  mensajeAlerta(message: string) {
    this.mensajeBase(message, 'warning');
  }

  mensajeError(message: string) {
    this.mensajeBase(message, 'danger');
  }

  mensajeBase(message: string, type: string) {
    const alertPlaceholder = document.getElementById('divMensaje')
    const appendAlert = () => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')

      alertPlaceholder?.appendChild(wrapper)
    }
    appendAlert()
  }
}
