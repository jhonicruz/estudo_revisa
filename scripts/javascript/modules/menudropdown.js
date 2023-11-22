export default function initDropdownMenu() {}

const btn = document.querySelector('[data-menu="button"]');
const menu = document.getElementById("menu");
const events = ["click", "touchstart"];
const className = "active";

if (btn) {
  events.forEach((userEvents) =>
    btn.addEventListener(userEvents, (e) => {
      e.preventDefault();
      menu.classList.toggle(className);
      btn.classList.toggle(className);

      const active = menu.classList.contains(className);

      if (active) {
        btn.setAttribute("aria-expanded", active);
        btn.setAttribute("aria-label", "Fechar Menu");
      } else {
        btn.setAttribute("aria-expanded", active);
        btn.removeAttribute("aria-label");
      }
    })
  );
}
