const axios = require('axios');
const fs = require('fs');
const { JSDOM } = require('jsdom');

// Crea un objeto JSDOM y obtén el objeto document
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const document = dom.window.document;

// Variables para el control del valor seleccionado
let lastSelectedValue = '';
const selectElement = document.getElementById('entitySelect');

if (selectElement) {
  selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value;
    const apiUrl = `http://localhost:3000/${selectedValue}`;

    // Verificar si el valor seleccionado ha cambiado
    if (selectedValue !== lastSelectedValue) {
      axios.get(apiUrl)
        .then((response) => {
          const jsonData = JSON.stringify(response.data);
          const filePath = 'data.json';

          fs.writeFile(filePath, jsonData, (error) => {
            if (error) {
              console.error('Error al escribir el archivo:', error);
            } else {
              console.log('Archivo JSON descargado exitosamente');
            }
          });
        })
        .catch((error) => {
          console.error('Error al conectar a la API:', error);
        });

      // Actualizar el último valor seleccionado
      lastSelectedValue = selectedValue;
    }
  });
} else {
  console.error('Elemento entitySelect no encontrado en el documento.');
}
