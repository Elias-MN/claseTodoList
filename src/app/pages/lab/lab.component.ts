import { Component } from '@angular/core';

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

  desabilitado = false;


}
