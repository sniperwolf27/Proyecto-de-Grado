document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("entitySelect");

  selectElement.addEventListener("change", function() {
    const selectedOption = selectElement.value;

    if (selectedOption !== "GTFS FOLDER") {
        const baseUrl = 'https://gtfs-restapi-production.up.railway.app/';
        const apiUrl = baseUrl + selectedOption;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error HTTP: ' + response.status);
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = selectedOption + '.json';
                document.body.appendChild(a);
                a.click();                    
                a.remove();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
  });
});



//////////////////////////////////////////////////////////

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
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  
  // Asume que tienes 10 imágenes en total, y cada una ocupa 10% (100 / 10) del track.
  // Así que el total del desplazamiento en porcentaje sería 10 * (10 - número de imágenes que quieres mostrar a la vez).
  const totalPercentage = 56.250 * (10 - 3);  // Asume que quieres mostrar 3 imágenes a la vez.
  
  // Límites de desplazamiento, puedes ajustar estos valores para adaptarse a tu caso
  const minPercentage = 0;
  const maxPercentage = -totalPercentage;

  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, minPercentage), maxPercentage);
  
  track.dataset.percentage = nextPercentage;
  
  track.style.transform = `translateX(${nextPercentage}%)`;
  
  for(const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${100 + nextPercentage}% center`;
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


//////////////////////////////////////////////////////
function copyCodeToClipboard() {
  var copyText = document.querySelector(".code-section").innerText;
  var textArea = document.createElement("textarea");
  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  
  var copyButton = document.getElementById("copyButton");
  var copyIcon = document.getElementById("copyIcon");
  var copyText = document.getElementById("copyText");

  copyIcon.classList.remove("bi-clipboard");
  copyIcon.classList.add("bi-check");
  copyText.innerText = "";

  setTimeout(function() {
      copyIcon.classList.remove("bi-check");
      copyIcon.classList.add("bi-clipboard");
  }, 2000);
}













