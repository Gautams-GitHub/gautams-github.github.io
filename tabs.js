document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll(".tab-button"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));

  function activate(tab) {
    buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${tab}`));
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => activate(btn.dataset.tab));
  });

  // default
  activate("links");
});


