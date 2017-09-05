function initMap() {
  var renewloc = {lat: 33.886888, lng: -117.879266};
  var csufloc = {lat: 33.883208, lng: -117.887026};
  var apartloc = {lat: 33.885587, lng: -117.877380};
  var hiuloc = {lat: 33.876906, lng: -117.884934};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: renewloc
  });


  var renew = new google.maps.Marker({
    position: renewloc,
    map: map
  });
  var csuf = new google.maps.Marker({
    position: csufloc,
    map: map
  });
  var apart = new google.maps.Marker({
    position: apartloc,
    map: map
  });
  var hiu = new google.maps.Marker({
    position: hiuloc,
    map: map
  })


  var renewwindow = new google.maps.InfoWindow({
    content: "Renew Church OC"
  });
  renewwindow.open(map,renew);

  var csufwindow = new google.maps.InfoWindow({
    content: "CSU Fullerton"
  });
  csufwindow.open(map,csuf);

  var apartwindow = new google.maps.InfoWindow({
    content: "Apartment Life"
  });
  apartwindow.open(map,apart);

  var hiuwindow = new google.maps.InfoWindow({
    content: "Hope International University"
  });
  hiuwindow.open(map,hiu);


  renew.addListener('click', function() {
      $('#renewModal').modal('toggle');
  });

  csuf.addListener('click', function() {
      $('#csufModal').modal('toggle');
  });

  apart.addListener('click', function() {
      $('#apartModal').modal('toggle');
  });

  hiu.addListener('click', function() {
      $('#hiuModal').modal('toggle');
  });
}