import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { UbicarnosComponent } from './ubicarnos/ubicarnos.component';  // Asegúrate de que esta ruta es correcta
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AppRoutingModule } from './app-routing.module';  // Importa el AppRoutingModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    UbicarnosComponent,  // Agregar el componente aquí
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Asegúrate de que AppRoutingModule esté aquí
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
