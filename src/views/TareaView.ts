import { Tarea, Prioridad } from "../models/Tarea.js";

export class TareaView {

    renderizar(tareas: Tarea[]): void {

        const lista = document.getElementById("lista-tareas");

        if (!lista) return;

        lista.innerHTML = "";

        tareas.forEach(tarea => {

            const item = document.createElement("li");

            let clasePrioridad = "";

            switch (tarea.prioridad) {

                case Prioridad.Alta:
                    clasePrioridad = "alta";
                    break;

                case Prioridad.Media:
                    clasePrioridad = "media";
                    break;

                case Prioridad.Baja:
                    clasePrioridad = "baja";
                    break;
            }

            item.className = clasePrioridad;

            if (tarea.completada) {
                item.classList.add("completada");
            }

            item.innerHTML = `
                <strong>${tarea.titulo}</strong>
                <br>
                Prioridad: ${tarea.prioridad}
                <br>
                Fecha: ${new Date(tarea.fecha).toLocaleDateString()}
            `;

            lista.appendChild(item);
        });
    }
}