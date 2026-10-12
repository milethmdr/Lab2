import { Tarea, Prioridad } from "../models/Tarea.js";
import { StorageService } from "../services/StorageService.js";

export class TareaController {

    private tareas: Tarea[];

    constructor() {
        this.tareas = StorageService.obtener();
    }

    obtenerTareas(): Tarea[] {
        return this.tareas;
    }

    agregarTarea(
        titulo: string,
        prioridad: Prioridad
    ): void {

        const nuevaTarea = new Tarea(
            crypto.randomUUID(),
            titulo,
            prioridad
        );

        this.tareas.push(nuevaTarea);

        StorageService.guardar(this.tareas);
    }

    completarTarea(id: string): void {

        const tarea = this.tareas.find(
            t => t.id === id
        );

        if (tarea) {
            tarea.completada = true;
            StorageService.guardar(this.tareas);
        }
    }

    eliminarTarea(id: string): void {

        this.tareas = this.tareas.filter(
            tarea => tarea.id !== id
        );

        StorageService.guardar(this.tareas);
    }

    ordenarPorFecha(): Tarea[] {

        return [...this.tareas].sort(
            (a, b) =>
                new Date(b.fecha).getTime() -
                new Date(a.fecha).getTime()
        );
    }

    ordenarPorPrioridad(): Tarea[] {

        const orden = {
            [Prioridad.Alta]: 1,
            [Prioridad.Media]: 2,
            [Prioridad.Baja]: 3
        };

        return [...this.tareas].sort(
            (a, b) =>
                orden[a.prioridad] -
                orden[b.prioridad]
        );
    }

    filtrarPorPrioridad(
        prioridad: Prioridad
    ): Tarea[] {

        return this.tareas.filter(
            tarea =>
                tarea.prioridad === prioridad
        );
    }

    filtrarPorEstado(
        completada: boolean
    ): Tarea[] {

        return this.tareas.filter(
            tarea =>
                tarea.completada === completada
        );
    }
}