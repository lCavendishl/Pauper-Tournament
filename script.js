// Einfaches Beispiel: Fortschrittsbalken anhand belegter Plätze berechnen
const progressBar = document.getElementById("progress-bar");

if (progressBar) {
  const belegtePlaetze = 13;
  const gesamtPlaetze = 32;
  const prozent = Math.round((belegtePlaetze / gesamtPlaetze) * 100);

  progressBar.style.width = `${prozent}%`;
  progressBar.textContent = `${belegtePlaetze} von ${gesamtPlaetze} Plätzen belegt`;
}


// Accordion FAQ Funktionalität
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    content.classList.toggle('show');
  });
});
