import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styles: ``
})
export class IniciosesionComponent {

  @Output()
  loginEvent = new EventEmitter();

  emailusuario: string = 'vmtdev@mail.com';
  passwordusuario: string = '123456.';
  nameuser: string = 'Dev Bootcamp';

  login() {
    this.loginEvent.emit();
  }

}
