import { Tarea } from "../models/Tarea.js";

export class StorageService {

    private static readonly KEY = "tareas";

    static guardar(tareas: Tarea[]): void {
        localStorage.setItem(
            this.KEY,
            JSON.stringify(tareas)
        );
    }
    static obtener(): Tarea[] {

        const datos = localStorage.getItem(this.KEY);

        if (!datos) {
            return [];
        }

        return JSON.parse(datos);
    }

    static eliminarTodo(): void {
        localStorage.removeItem(this.KEY);
    }
}