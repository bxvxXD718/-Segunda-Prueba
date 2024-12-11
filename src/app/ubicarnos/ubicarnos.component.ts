import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicarnos',
  templateUrl: './ubicarnos.component.html',
  styleUrls: ['./ubicarnos.component.css']
})
export class UbicarnosComponent {
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
