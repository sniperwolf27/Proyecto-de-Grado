document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("entitySelect");
  const downloadBtn = document.getElementById("downloadBtn");

  selectElement.addEventListener("change", function() {
    const selectedOption = selectElement.value;

    switch (selectedOption) {
      case "agency":
        downloadBtn.textContent = "Descargar Agencia";
        break;
      case "routes":
        downloadBtn.textContent = "Descargar Rutas";
        break;
      case "trips":
        downloadBtn.textContent = "Descargar Viajes";
        break;
      case "stop_times":
        downloadBtn.textContent = "Descargar Tiempos de Parada";
        break;
      case "calendar":
        downloadBtn.textContent = "Descargar Calendario";
        break;
      default:
        downloadBtn.textContent = "Descargar";
        break;
    }
    downloadBtn.style.display = "inline";
  });

  downloadBtn.addEventListener("click", function() {
    const selectedOption = selectElement.value;
    const baseUrl = 'https://gtfs-restapi-production.up.railway.app/';
    const apiUrl = baseUrl + selectedOption;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
            throw new Error('Error HTTP: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        const filename = selectedOption + '.json';
        const json = JSON.stringify(data);
        const blob = new Blob([json], { type: 'application/json' });

        saveAs(blob, filename);  // Utiliza FileSaver.js para guardar el archivo
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
