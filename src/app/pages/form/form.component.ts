import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  // FormControl() Maneja tanto los eventos de cambio como de asignación de parámetros

  nombreControl = new FormControl('',
    {
      nonNullable: true,
      validators: [
        Validators.minLength(5)
      ]
    }
  );

  // Para reaccionar a los cambios también aquí, en la lógica:
  constructor() {
    // Nos suscribimos en este componente a ese controlador
    this.alturaControl.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.colorControl.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  colorControl = new FormControl();

  alturaControl = new FormControl(50, {
    nonNullable: true
  });

  comprobarNombre() {
    if (this.nombreControl.valid) {
      console.log("Es válido");
    } else {
      console.log("No es válido");
    }
  }

  // Ejercicio clase: Crear un componente login que reciba un campo email y contraseña, se deberán validar para que sea
  // un email, y la contraseña tenga mínimo 8 carácteres. Cuando se da login, se verificará y comprobarán
  // los posibles errores que saldrán debajo de cada input.



}
