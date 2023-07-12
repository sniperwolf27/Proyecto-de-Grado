document.addEventListener('DOMContentLoaded', (event) => {
    let text = 'https://gtfs-restapi-production.up.railway.app';
    let i = 0;
    let speed = 100; 
    let delayBetweenCycles = 3000; // Retraso de 3 segundos entre ciclos

    let typewriterInterval = setInterval(function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerText += text.charAt(i);
            i++;
        } else {
            // Limpiamos el intervalo una vez hemos terminado de escribir
            clearInterval(typewriterInterval);
            setTimeout(() => {
                // Borramos el texto y reiniciamos el ciclo después del retraso
                document.getElementById("typewriter").innerText = '';
                i = 0;
                typewriterInterval = setInterval(typeWriter, speed);
            }, delayBetweenCycles);
        }
    }, speed);
});
