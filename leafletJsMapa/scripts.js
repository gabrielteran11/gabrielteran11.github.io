const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'


var myMap = L.map('mapid').setView([-12.0486281, -77.0464956], 12);

L.tileLayer(tilesProvider, {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(myMap)

//var marker = L.marker([51.505, -0.09]).addTo(myMap)

/* 
let iconMarker = L.icon({
    iconUrl: 'marker.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})


let marker2 = L.marker([51.51, -0.09], { icon: iconMarker }).addTo(myMap) 
*/

myMap.doubleClickZoom.disable()

/* myMap.on('dblclick', e => {
var popup = L.popup();
    popup
        .setLatLng(e.latlng)
        .setContent("Hiciste clic en el mapa en " + e.latlng.toString())
        .openOn(myMap);
myMap.on('click', onMapClick);
}) */

function onMapClick(e) {
    let latLng = myMap.mouseEventToLatLng(e.originalEvent);

    var marker = L.marker([latLng.lat, latLng.lng]).addTo(myMap)
    marker.bindPopup("<b>No se que poner</b><br>Ayuda.")
}

var circle = L.circle([-12.0689979, -77.0865221], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(myMap);
var polygon = L.polygon([
    [-12.0760934, -77.105543],
    [-12.0758384, -77.1007817],
    [-12.0774191, -77.1020415]
]).addTo(myMap);

circle.bindPopup("No se que poner.");
polygon.bindPopup("No se que poner.");


//obtener la geolocalizacion mediante el navegador
navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos

        let marker = L.marker([coords.latitude, coords.longitude]).addTo(myMap)
        marker.bindPopup("<b>Tu ubicacion</b><br>:D.")

    },
    (err) => {
        console.log(err)
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },
)