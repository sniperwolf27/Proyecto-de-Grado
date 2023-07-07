function initMap() {
    fetch('gtfs/stops.json') // reemplaza 'gtfs/stops.json' con la ruta a tu archivo .json
        .then(response => response.json())
        .then(data => {
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: { lat: data[0].stop_lat, lng: data[0].stop_lon }, // centra el mapa en la primera parada
            });

            data.forEach((stop) => {
                if(stop.stop_lat && stop.stop_lon){
                    const marker = new google.maps.Marker({
                        position: { lat: stop.stop_lat, lng: stop.stop_lon },
                        map: map,
                        title: stop.stop_name,
                    });
                }
            });
        });
}

window.onload = initMap;