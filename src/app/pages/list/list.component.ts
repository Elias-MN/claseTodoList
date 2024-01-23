import { Component, signal } from '@angular/core';
import { Tarea } from '../../model/tarea.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listTask = signal<Tarea[]>([]);

  addNewTask(event: Event) {
    let input = event.target as HTMLInputElement;

    let newTask: Tarea = {
      id: Date.now(),
      nombre: input.value,
      completada: false
    }

    // Opción 1 (No recomendada)
    /*
    let newList = this.listTask();
    newList.push(newTask);
    this.listTask.set(newList);
    input.value = "";
    */

    // Opción 2 (Recomendada): Usando operador REST
    // Con set reseteamos todo el valor
    // Con update lo actualizamos, indicamos el valor anterior
    // y usando el operador REST, incluimos la nueva al final de la lista
    this.listTask.update((listTask) => [...listTask, newTask]);

    /*
    Los tipos primitivos son inmutables. Una vez que se le asigna un valor primitivo a una variable,
    la única manera de cambiarlo es asignándole otro valor. Al hacer esto, se está creando una nueva
    instancia de la variable.

    La mutabilidad es una de las principales causas de que el código de las aplicaciones genere efectos secundarios.
    Cuando varias partes de un proyecto aplican cambios sobre un mismo dato, es muy probable que se produzcan errores.
    */



  }

}
