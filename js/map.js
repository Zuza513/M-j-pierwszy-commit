function initMap() {
    const location = { lat: 50.030146, lng: 20.221248 };

const map = new google.maps.Map(document.getElementById("map"), {zooom: 18, center: location});
 
const marker = new google.maps.Map({position: location, map: map});

}