import { Tarea, Prioridad } from "../models/Tarea.js";
import { StorageService } from "../services/StorageService.js";
export class TareaController {
    tareas;
    constructor() {
        this.tareas = StorageService.obtener();
    }
    obtenerTareas() {
        return this.tareas;
    }
    agregarTarea(titulo, prioridad) {
        const nuevaTarea = new Tarea(crypto.randomUUID(), titulo, prioridad);
        this.tareas.push(nuevaTarea);
        StorageService.guardar(this.tareas);
    }
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
            StorageService.guardar(this.tareas);
        }
    }
    eliminarTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        StorageService.guardar(this.tareas);
    }
    ordenarPorFecha() {
        return [...this.tareas].sort((a, b) => new Date(b.fecha).getTime() -
            new Date(a.fecha).getTime());
    }
    ordenarPorPrioridad() {
        const orden = {
            [Prioridad.Alta]: 1,
            [Prioridad.Media]: 2,
            [Prioridad.Baja]: 3
        };
        return [...this.tareas].sort((a, b) => orden[a.prioridad] -
            orden[b.prioridad]);
    }
    filtrarPorPrioridad(prioridad) {
        return this.tareas.filter(tarea => tarea.prioridad === prioridad);
    }
    filtrarPorEstado(completada) {
        return this.tareas.filter(tarea => tarea.completada === completada);
    }
}
//# sourceMappingURL=TareaController.js.map