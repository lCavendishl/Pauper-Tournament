// Einfaches Beispiel: Fortschrittsbalken anhand belegter Plätze berechnen
const belegtePlaetze = 13;
const gesamtPlaetze = 32;

const prozent = Math.round((belegtePlaetze / gesamtPlaetze) * 100);

const progressBar = document.getElementById("progress-bar");
progressBar.style.width = `${prozent}%`;
progressBar.textContent = `${belegtePlaetze} von ${gesamtPlaetze} Plätzen belegt`;
