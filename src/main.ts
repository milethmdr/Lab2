import { TareaController } from "./controllers/TareaController.js";
import { TareaView } from "./views/TareaView.js";
import { Prioridad } from "./models/Tarea.js";

const controller = new TareaController();
const view = new TareaView();

function actualizarVista(): void {
    view.renderizar(controller.obtenerTareas());
}

const tituloInput = document.getElementById("titulo") as HTMLInputElement;
const prioridadSelect = document.getElementById("prioridad") as HTMLSelectElement;
const btnAgregar = document.getElementById("btn-agregar");

btnAgregar?.addEventListener("click", () => {
    
    const titulo = tituloInput.value.trim();

    if (!titulo) {
        alert("Debe ingresar una tarea");
        return;
    }

    controller.agregarTarea(
        titulo,
        prioridadSelect.value as Prioridad
    );

    tituloInput.value = "";

    actualizarVista();
});

actualizarVista();