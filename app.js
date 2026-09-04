// ============================================================
// DANGELS PRINT STUDIO — ACCESOS
// Agrega, elimina o modifica tarjetas desde esta lista.
// ============================================================

const accesses = [
  // Ejemplo para agregar después:
  // {
  //   name: "Mi nueva página",
  //   description: "Descripción breve del proyecto.",
  //   url: "https://ejemplo.com",
  //   icon: "✦",
  //   accent: "#e11d48"
  // },
];

const grid = document.getElementById("access-grid");
const counter = document.getElementById("counter");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
counter.textContent = accesses.length;

if (!accesses.length) {
  grid.innerHTML = `
    <div class="empty-state">
      Tus accesos aparecerán aquí.<br>
      <span>Agrega una página en la lista <strong>accesses</strong> de app.js.</span>
    </div>
  `;
} else {
  accesses.forEach((item, index) => {
    const card = document.createElement("a");
    card.className = "access-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.style.setProperty("--card-accent", item.accent || "#e11d48");
    card.style.animationDelay = `${index * 70}ms`;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-icon">${item.icon || "↗"}</span>
        <span class="card-arrow">↗</span>
      </div>
      <div class="card-info">
        <h3>${item.name}</h3>
        <p>${item.description || "Abrir página"}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}
