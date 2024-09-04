import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modulos/persona/persona.module').then(a => a.PersonaModule) },
  {
    path: 'datospersonas',
    loadChildren: () => import('./modulos/datospersonas/datospersonas.module').then(m => m.DatospersonasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
