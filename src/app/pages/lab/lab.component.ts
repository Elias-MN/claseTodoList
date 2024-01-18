import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css'
})
export class LabComponent {

  aplicacion = "Mi laboratorio de pruebas";

  listaComida = [
    "Frutas",
    "Verduras",
    "Carne"
  ];

  desabilitado = true;

  urlImagen = "https://picsum.photos/200/200?r=" + Math.random();

  clicks = 0;
  ClickHandler() {
    this.clicks++;
  }

  resultado = "";
  InputHandler(event: Event) {
    let input = event.target as HTMLInputElement;
    this.resultado = input.value;
  }

  nombre = signal("Elias");

  bandera = signal(true);

  CambiarBandera() {
    this.bandera.set(!this.bandera());
  }

  contador = signal(0);
  Contar() {
    setInterval(() => {
      this.contador.set(this.contador() + 1);
    }, 1000);
  }

  constructor() {
    this.Contar();
  }

  // Crear un input color, cuyo color seleccionado, se muestre en pantalla.

}
