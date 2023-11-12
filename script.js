document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const addButton = document.getElementById("next");
    const addButton1 = document.getElementById("back");
    const leftSquare1Div = document.getElementById("left-square1");

    let counter = 0;

    addButton.addEventListener("click", function () {
        counter++;
        counterElement.textContent = counter;

        // Tworzenie ścieżki do obrazu "floor_"
        const floorImagePath = `Floors_Png/floor_${counter}.png`;

        // Tworzenie ścieżki do obrazu "wall_"
        const wallImagePath = `Walls_Png/wall_${counter}.png`;

        // Tworzenie kontenera div dla obrazów
        const imageContainer = document.createElement("div");

        // Tworzenie elementu obrazu "floor_"
        const floorImageElement = document.createElement("img");
        floorImageElement.src = floorImagePath;

        // Tworzenie elementu obrazu "wall_"
        const wallImageElement = document.createElement("img");
        wallImageElement.src = wallImagePath;

        // Dodanie klas CSS dla stylizacji
        imageContainer.classList.add("image-container");
        floorImageElement.classList.add("floor-image");
        wallImageElement.classList.add("wall-image");

        // Usunięcie poprzednich obrazów, jeśli istnieją
        leftSquare1Div.innerHTML = '';

        // Dodanie obu obrazów do kontenera
        imageContainer.appendChild(floorImageElement);
        imageContainer.appendChild(wallImageElement);

        // Dodanie kontenera do diva "left-square1"
        leftSquare1Div.appendChild(imageContainer);
    });

    addButton1.addEventListener("click", function () {
        counter--;
        counterElement.textContent = counter;

        // Tworzenie ścieżki do obrazu "floor_"
        const floorImagePath = `Floors_Png/floor_${counter}.png`;

        // Tworzenie ścieżki do obrazu "wall_"
        const wallImagePath = `Walls_Png/wall_${counter}.png`;

        // Tworzenie kontenera div dla obrazów
        const imageContainer = document.createElement("div");

        // Tworzenie elementu obrazu "floor_"
        const floorImageElement = document.createElement("img");
        floorImageElement.src = floorImagePath;

        // Tworzenie elementu obrazu "wall_"
        const wallImageElement = document.createElement("img");
        wallImageElement.src = wallImagePath;

        // Dodanie klas CSS dla stylizacji
        imageContainer.classList.add("image-container");
        floorImageElement.classList.add("floor-image");
        wallImageElement.classList.add("wall-image");

        // Usunięcie poprzednich obrazów, jeśli istnieją
        leftSquare1Div.innerHTML = '';

        // Dodanie obu obrazów do kontenera
        imageContainer.appendChild(floorImageElement);
        imageContainer.appendChild(wallImageElement);

        // Dodanie kontenera do diva "left-square1"
        leftSquare1Div.appendChild(imageContainer);
    });
});

