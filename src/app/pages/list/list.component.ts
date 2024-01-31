import { Component, computed, signal } from '@angular/core';
import { Tarea } from '../../model/tarea.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listTask = signal<Tarea[]>([]);

  nuevaTareaControlador = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.minLength(3),
      Validators.required
    ]
  });

  checkTarea() {
    if (this.nuevaTareaControlador.valid) {
      let titulo = this.nuevaTareaControlador.value.trim();
      if (titulo !== "") {
        this.addNewTask(this.nuevaTareaControlador.value);
        this.nuevaTareaControlador.reset();
      }
    }
  }

  updateModeEditing(id: number) {
    this.listTask.update((listTask) => {
      return listTask.map((task, posicion) => {
        if (id === posicion) {
          return {
            ...task,
            editando: true
          }
        }
        return {
          ...task,
          editando: false
        }
      });
    });
  }

  updateTexto(id: number, event: Event) {
    let texto = event.target as HTMLInputElement;

    this.listTask.update((listTask) => {
      return listTask.map((task, posicion) => {
        if (id === posicion) {
          return {
            ...task,
            nombre: texto.value,
            editando: false
          }
        }
        return task
      });
    });

  }

  addNewTask(titulo: string) {
    let newTask: Tarea = {
      id: Date.now(),
      nombre: titulo,
      completada: false,
      editando: false
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

  deleteTask(id: Number) {
    // Mutar el listado sería usando un método como .splice sobre el array
    // Pero siguiendo el patrón de crear nuevos estados de las señales de Angular
    // Utilizamos la función nativa de JS .filter para quedarnos con las tareas que cumplan una condición, que
    // se basa en comparar el índice del elemento al que hemos pulsado del listado

    this.listTask.update((listTask) => listTask.filter((task, posicion) => posicion !== id));

    /* Lo mismo pero de otra forma:
    this.listTask.update((listTask) => {
      return listTask.filter((task, posicion) => {
        return posicion !== id
      });
    });
    */
  }

  updateTask(id: Number) {
    this.listTask.update((listTask) => {
      return listTask.map((task, posicion) => {
        if (id === posicion) {
          return {
            ...task,
            completada: !task.completada
          }
        }
        return task;
      });
    });
  }

  filtro = signal<'todas' | 'pendientes' | 'completadas'>('todas');

  CambiarFiltro(nuevoFiltro: 'todas' | 'pendientes' | 'completadas') {
    this.filtro.set(nuevoFiltro);
  }

  listadoPorFiltro = computed(() => {
    // Cada vez que cambie el filtro o se añada una tarea
    let filtro = this.filtro();
    let listado = this.listTask();

    // Obtengo las tareas no completadas
    if (filtro === "completadas") {
      return listado.filter(tarea => tarea.completada === false);
    }

    // Obtengo las tareas completadas
    if (filtro === "pendientes") {
      return listado.filter(tarea => tarea.completada === true);
    }

    // Obtengo todas las tareas
    return listado;

  });


}
