const container = document.querySelector("#container");
for(let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.className = "pixel-block";
  container.appendChild(square);
}
