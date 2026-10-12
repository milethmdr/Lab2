import { TareaController } from "./controllers/TareaController.js";
import { TareaView } from "./views/TareaView.js";
import { Prioridad } from "./models/Tarea.js";
const controller = new TareaController();
const view = new TareaView();
function actualizarVista() {
    view.renderizar(controller.obtenerTareas());
}
const tituloInput = document.getElementById("titulo");
const prioridadSelect = document.getElementById("prioridad");
const btnAgregar = document.getElementById("btn-agregar");
btnAgregar?.addEventListener("click", () => {
    const titulo = tituloInput.value.trim();
    if (!titulo) {
        alert("Debe ingresar una tarea");
        return;
    }
    controller.agregarTarea(titulo, prioridadSelect.value);
    tituloInput.value = "";
    actualizarVista();
});
actualizarVista();
//# sourceMappingURL=main.js.map