// Definimos la url base
const baseURL = "https://gtfs-restapi-production.up.railway.app";

// Función para descargar un archivo .json
function downloadJSON(jsonData, fileName) {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));
  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", fileName + ".json");
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

// Realizamos una petición a la ruta /routes
fetch(baseURL + '/routes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error de red');
    }
    return response.json();
  })
  .then(data => {
    // Descargamos el archivo .json con el nombre 'routes'
    downloadJSON(data, 'routes');
  })
  .catch(error => console.error('Hubo un problema con tu operación fetch: ', error));

  $(document).ready(function() {
    const apiUrl = 'https://gtfs-restapi-production.up.railway.app/';
  
    $('#entitySelect').on('change', function() {
      const endpoint = $(this).val();
      fetch(apiUrl + endpoint)
        .then(response => response.json())
        .then(data => {
          const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
          $('#download-button').attr('href', dataStr);
          $('#download-button').attr('download', `${endpoint}.json`);
          $('#download-button').show();
        })
        .catch(err => {
          $('#message-container').text(`Error: ${err.message}`);
        });
    });
  });

  function downloadJson() {
    var entity = document.getElementById("entitySelect").value;
    var data = ""; // Aquí debes reemplazar por la función que genera los datos .json en función del valor de 'entity'.
    var filename = entity + ".json";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function getData() {
    document.getElementById("downloadBtn").style.display = "block"; // Esto mostrará el botón de descarga cuando se elija una opción del selector.
}
