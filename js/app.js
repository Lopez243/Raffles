
import { renderTicketGrid } from "./modules/ticket-grid.js";

function initializeApp() {
  const grid = document.querySelector("#ticket-grid");
  const status = document.querySelector("#ticket-status");

  if (!grid || !status) {
    console.error("No se encontraron los elementos de la página.");
    return;
  }

  try {
    renderTicketGrid(grid, 20);
    status.textContent = "Demostración cargada: 100 números de ejemplo.";
  } catch (error) {
    console.error("No fue posible cargar la demostración.", error);
    status.textContent = "No se pudo cargar la demostración.";
  }
}

initializeApp();
