// Inicjalizacja Hammer.js na odpowiednim elemencie (np. całej stronie)
var hammertime = new Hammer(document.body);

// Zmienna do przechowywania aktualnego poziomu przybliżenia
var currentZoom = 1;

// Funkcja obsługująca zdarzenie pinch, które odpowiada za przybliżanie
hammertime.on("pinch", function (event) {
  // Aktualizacja poziomu przybliżenia
  currentZoom = Math.max(1, Math.min(currentZoom * event.scale, 100)); // 25 to maksymalny poziom zoomu

  // Zmiana przybliżenia przy użyciu CSS transform
  document.body.style.transform = "scale(" + currentZoom + ")";
});

// Funkcja obsługująca zdarzenie doubletap, aby zresetować przybliżenie
hammertime.on("doubletap", function () {
  currentZoom = 1;
  document.body.style.transform = "scale(1)";
});


  