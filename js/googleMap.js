function initMap() {
  var cerritos = {lat: 33.8583, lng: -118.0648};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: cerritos
  });
  var marker = new google.maps.Marker({
    position: cerritos,
    map: map
  });
}