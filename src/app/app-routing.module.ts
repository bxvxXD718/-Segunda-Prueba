import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UbicarnosComponent } from './ubicarnos/ubicarnos.component';  // Ruta correcta
import { ContactanosComponent } from './contactanos/contactanos.component';  // Ruta correcta

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ubicarnos', component: UbicarnosComponent },  // Ruta para "Ubicarnos"
  { path: 'contactanos', component: ContactanosComponent },  // Ruta para "Contáctanos"
  { path: '**', redirectTo: '' }  // Redirige a la página de inicio en caso de ruta incorrecta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
