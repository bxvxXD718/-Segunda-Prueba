import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: string = '';
  mensaje: string = '';
  mensajeEnviado: string = '';

  enviarMensaje() {
    // Simulamos el envío del formulario
    this.mensajeEnviado = `Hola ${this.nombre} ${this.apellido}, su mensaje ha sido enviado correctamente.`;
  }
}
