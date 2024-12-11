import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  nombre: string = '';
  apellido: string = '';
  mensajeEnviado: boolean = false;

  // Método que se llama al enviar el formulario
  enviarFormulario() {
    // Aquí puedes agregar la lógica para enviar el formulario o hacer cualquier otra acción
    console.log('Formulario Enviado');
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);

    // Mostrar mensaje de confirmación
    this.mensajeEnviado = true;
  }
}
