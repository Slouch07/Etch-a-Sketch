const container = document.querySelector("#container");

// Draw default 16 x 16 grid

// Draw rows
for (let row = 1; row <= 16; row++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  // Draw pixels (squares) within each row
  for (let pixel = 1; pixel <= 16; pixel++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = "100%";
    pixel.style.height = 800 / 16;
    row.appendChild(pixel);
    // Event listener for each pixel
    pixel.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "black";
    });
  }
};

// Event listener for grid size button
const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", event => {
  let gridSize = prompt("Select a grid size from 0 to 100: ");
});

// Event listener for reset button
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", event => {
  location.reload();
});




