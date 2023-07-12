
function copyCodeToClipboardApiUrl() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("api-url");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
function copyCodeToClipboardAgency() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-agency");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
function copyCodeToClipboardRoutes() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-routes");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
function copyCodeToClipboardCalendar() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-calendar");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
function copyCodeToClipboardStops() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-stops");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
function copyCodeToClipboardTrips() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-trips");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
function copyCodeToClipboardStopTimes() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-stop_times");

  /* Crea un rango y selecciona el texto del elemento de entrada de texto */
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  /* Copia el texto al portapapeles */
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  /* Desselecciona el rango */
  window.getSelection().removeAllRanges();
}
async function copyCodeToClipboardRoutes() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-routes").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-routes");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}
async function copyCodeToClipboardAgency() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-agency").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-agency");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}
async function copyCodeToClipboardCalendar() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-calendar").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-calendar");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}
async function copyCodeToClipboardTrips() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-trips").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-trips");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}
async function copyCodeToClipboardStops() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-stops").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-stops");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}
async function copyCodeToClipboardStopTimes() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("copyText-stop_times").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-stop_times");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}

async function copyCodeToClipboardApiUrl() {
  /* Obtén el elemento que contiene el código */
  var copyText = document.getElementById("api-url").innerText;
  /* Obtén el elemento que contiene el ícono */
  var copyIcon = document.getElementById("copyIcon-ApiUrl");

  /* Copia el texto al portapapeles */
  try {
      await navigator.clipboard.writeText(copyText);
      console.log('Copying to clipboard was successful');

      /* Cambia el ícono a un ícono de verificación */
      copyIcon.className = "bi bi-clipboard-check";

      /* Revierte el ícono a su estado original después de 1.2 segundos */
      setTimeout(function() {
          copyIcon.className = "bi bi-clipboard";
      }, 2000);
  } catch (err) {
      console.log('Oops, unable to copy');
  }
}
