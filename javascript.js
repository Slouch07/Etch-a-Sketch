// Draw the 16 X 16 grid
const container = document.querySelector("#container");

for(let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.className = `pixel-${i}`;
  container.appendChild(square);

  // Event listener for each square
  square.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "black";
});
}

// Event listener for grid size button
const button = document.querySelector("#button");
button.addEventListener("click", event =>{
  let size = prompt("Select a grid size from 0 to 100: ");
})




