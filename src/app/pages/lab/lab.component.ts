import { Component, computed, signal } from '@angular/core';
import { Tarea } from '../../model/tarea.model';

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
  color = signal("Sin seleccionar");
  CambiarColor(event: Event) {
    let input = event.target as HTMLInputElement;
    this.color.set(input.value);
  }

  listadoSignal = signal([
    "Aprender js",
    "Aprender Angular",
    "Desarrollar una app"
  ]);

  /*
    listadoTareas = signal<Tarea[]>([
      {
        id: 0,
        nombre: "Aprender js",
        completada: false
      },
      {
        id: 1,
        nombre: "Aprender Angular",
        completada: true
      },
      {
        id: 2,
        nombre: "Desarrollar una app",
        completada: false
      }
    ]);
  
    ocultar = signal(true);
    botonEstado = signal("Ocultar");
  
    cambiarCSS() {
      this.ocultar.set(!this.ocultar());
  
      if (this.ocultar()) {
        this.botonEstado.set("Ocultar");
      } else {
        this.botonEstado.set("Mostrar");
      }
  
    }
  
    texto = signal("");
    cambiarNombre(event: Event) {
      let input = event.target as HTMLInputElement;
      this.texto.set(input.value);
    }
  
  
    firstName = signal("");
    lastName = signal("");
  
    cambiarName(event: Event) {
      let input = event.target as HTMLInputElement;
      this.firstName.set(input.value);
    }
  
    cambiarApellido(event: Event) {
      let input = event.target as HTMLInputElement;
      this.lastName.set(input.value);
    }
  
    // Para asignarle un valor, debemos devolverselo con return
    // fullName debe estar en la plantilla
    fullName = computed(() => {
      return this.firstName() + " " + this.lastName();
    });
  
    rol = signal("");
    cambiar(newRol: string) {
      this.rol.set(newRol);
    }
  
    computedRol = computed(() => {
      // Podemos controlar cualquier número de signals
      let rolRecibido = this.rol();
  
      // Cuando cambie cualquier signal, se ejecutará toda esta función computed
      if (rolRecibido === 'admin') {
        console.log("Eres admin");
      } else {
        console.log("No eres admin");
      }
    });
  
    // Tarea 2: Incorpora una imágen en uno de los extremos de la pantalla, a continuación, añade un efecto css
    // para que cuando el ratón esté SÓLO encima de ella, se añada una clase específica
  
    perroMostrar = signal(false);
    animar() {
      this.perroMostrar.set(true);
    }
  
    desanimar() {
      this.perroMostrar.set(false);
    }
  
  
    // Tarea 3: Crea un nuevo componente "list" al que deberás acceder por el routing mediante /list, este componente deberá
    // tener un input text para incluir tareas y un listado con las tareas que se van incluyendo, por último, cada tarea del listado
    // deberá mostrar, su nombre y con un checkbox, si está completada
  
    newTask(event: Event) {
      let input = event.target as HTMLInputElement;
  
      let newTask: Tarea = {
        id: Date.now(),
        nombre: input.value,
        completada: false
      };
      let newList = this.tareaListado();
      newList.push(newTask);
      this.tareaListado.set(newList);
  
      input.value = "";
  
    }
  
    newTaskUpdate(event: Event) {
      let input = event.target as HTMLInputElement;
  
      let newTask: Tarea = {
        id: Date.now(),
        nombre: input.value,
        completada: false
      };
  
  
  
  
      // Con set reseteamos todo el valor
      // Con update lo actualizamos, indicamos el valor anterior
      // y usando el operador REST, incluimos la nueva al final de la lista
      this.tareaListado.update((tareaListado) => [...tareaListado, newTask]);
  
      // Update sigue el patrón no mutar para manejar estados de elementos,
      // que genera un nuevo estado del listado
  
      input.value = "";
  
    }
  
    tareaListado = signal<Tarea[]>([
      {
        id: 0,
        nombre: "Aprender js",
        completada: false
      },
      {
        id: 1,
        nombre: "Aprender Angular",
        completada: true
      },
      {
        id: 2,
        nombre: "Desarrollar una app",
        completada: false
      }
    ]);*/
}
