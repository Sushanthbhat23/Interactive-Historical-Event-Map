//waiting for the map to load
document.addEventListener('DOMContentLoaded', function(){
    //now i am creating a map and setting up the sample coordinates
    let map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer to the map from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Create a marker with popup and add it to the map
    let marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup("Hello, I'm a marker!").openPopup();
})
