
  const options = document.querySelectorAll("#entitySelect option");

  // Agrega el evento "mouseover" a cada opción
  options.forEach((option) => {
    option.addEventListener("mouseover", () => {
      option.classList.add("hovered");
    });

    // Agrega el evento "mouseout" a cada opción
    option.addEventListener("mouseout", () => {
      option.classList.remove("hovered");
    });
  });
