export function createPlate(width, height) {
  console.log("BlueprintNodes INFO: Creating Plate");

  const cellSize = 70;
  let cols = Math.floor(width / cellSize);
  let rows = Math.floor(height / cellSize);

  const plate = document.createElement("div");
  plate.style.width = width + "px";
  plate.style.height = height + "px";
  plate.style.backgroundColor = "#242424";
  plate.style.overflow = "hidden";
  plate.style.position = "relative";
  plate.style.display = "grid";
  plate.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
  plate.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;

  function updatePlateSize() {
    console.log("BlueprintNodes INFO: Updating Plate Size");
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    cols = Math.floor(newWidth / cellSize);
    rows = Math.floor(newHeight / cellSize);
    plate.style.width = newWidth + "px";
    plate.style.height = newHeight + "px";
    plate.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    plate.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    console.log("BlueprintNodes INFO: Plate Size Updated");
  }


  window.addEventListener('load', updatePlateSize);

  let container = null;
  window.addEventListener('contextmenu', function(e) {
    e.preventDefault();

    if (container) {
      document.body.removeChild(container);
    }

    container = document.createElement("div");
    container.style.width = "180px";
    container.style.height = "200px";
    container.style.borderRadius = "5px";
    container.style.backgroundColor = "white";
    container.style.position = "absolute";
    container.style.left = (e.clientX + 10) + "px";
    container.style.top = (e.clientY + 10) + "px";
    container.style.pointerEvents = "none";


    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.style.fontSize = "16px";
    addButton.style.border = "none";
    addButton.style.background = "none";
    addButton.style.fontFamily = "Arial, sans-serif";
    addButton.style.cursor = "pointer";

    container.appendChild(addButton);
    document.body.appendChild(container);

    const rm = () => {
      if (container) {
        document.body.removeChild(container);
        container = null;
        window.removeEventListener("click", rm);
      }

    }

    window.addEventListener("click", rm);

    console.log("BlueprintNodes INFO: Right Click Event Activated");
  });

  window.addEventListener('resize', updatePlateSize);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      cell.style.backgroundColor = "transparent";
      cell.style.border = "1px solid gray";
      console.log("BlueprintNodes INFO: Adding cell to plate: ", cellSize, rows, cols, cell);
      plate.appendChild(cell);
    }
  }

  const label = document.createElement("div");
  label.textContent = "beta Blueprint";
  label.style.position = "absolute";
  label.style.bottom = "30px";
  label.style.right = "30px";
  label.style.color = "#fff";
  label.style.fontSize = "20px";
  label.style.fontFamily = "Arial, sans-serif";
  label.style.webkitUserSelect = "none";
  label.style.userSelect = "none";
  plate.appendChild(label);

  console.log("BlueprintNodes INFO: Plate created");
  return plate;
}
