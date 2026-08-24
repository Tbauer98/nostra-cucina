/* =========================================================
   Nostra Cucina – script.js
   Einziger JS-Einsatz: Burger-Button auf/zu
   ========================================================= */

const burger = document.querySelector(".burger");
const mobileNav = document.querySelector("#mobile-nav");

burger.addEventListener("click", () => {
  // aktueller Zustand steht im HTML-Attribut aria-expanded
  const istOffen = burger.getAttribute("aria-expanded") === "true";

  // Zustand umdrehen
  burger.setAttribute("aria-expanded", String(!istOffen));
  burger.setAttribute("aria-label", istOffen ? "Menü öffnen" : "Menü schließen");
  burger.classList.toggle("is-open", !istOffen);

  // hidden = das Menü ist für alle (auch Screenreader) weg
  mobileNav.hidden = istOffen;
});
