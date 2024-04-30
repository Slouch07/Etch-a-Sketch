const container = document.querySelector("#container");

// Draw grid function
function drawGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    // Draw pixels (squares) within each row
    for (let j = 1; j <= gridSize; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = "100%";
      pixel.style.height = 800 / gridSize;
      row.appendChild(pixel);
      // Event listener for each pixel
      pixel.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "black";
      });
    }
  };
}

function clearGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

// Event listener for grid size button
const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", event => {
  clearGrid();
  let size = prompt("Select a grid size from 1 to 100: ");
  if (size <= 0 || size > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    drawGrid(size);
  }
});




