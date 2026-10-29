
export function renderTicketGrid(container, count = 100) {
  if (!(container instanceof HTMLElement)) {
    throw new TypeError("Se necesita un contenedor HTML válido.");
  }

  if (!Number.isInteger(count) || count < 1 || count > 100) {
    throw new RangeError("La cantidad debe estar entre 1 y 100.");
  }

  const fragment = document.createDocumentFragment();

  for (let number = 0; number <= count; number += 1) {
    const ticket = document.createElement("div");

    ticket.className = "ticket";
    ticket.textContent = String(number).padStart(2, "0");

    fragment.appendChild(ticket);
  }

  container.replaceChildren(fragment);
}
