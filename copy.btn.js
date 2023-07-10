function myFunction() {
    /* Obtén el elemento de entrada de texto */
    var copyText = document.getElementById("myInput");
  
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