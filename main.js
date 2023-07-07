document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("entitySelect");
  const downloadBtn = document.getElementById("downloadBtn");

  selectElement.addEventListener("change", function() {
    const selectedOption = selectElement.value;

    switch (selectedOption) {
      case "agency":
        downloadBtn.textContent = "Descargar agency.json";
        break;
      case "routes":
        downloadBtn.textContent = "Descargar routes.json";
        break;
      case "trips":
        downloadBtn.textContent = "Descargar trips.json";
        break;
      case "stop_times":
        downloadBtn.textContent = "Descargar stop_times.json";
        break;
      case "calendar":
        downloadBtn.textContent = "Descargar calendar.json";
        break;
        case "stops":
          downloadBtn.textContent = "Descargar stops.json";
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

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
