function getLocation() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    sucess_pos,
    error_pos,
    {enableHighAccuracy:true, maximumAge:30000, timeout:27000});
  } else {
  alert("Geolocation is not supported by this browser.");
  Shiny.onInputChange("geoloc_lat", "NOT_SUPPORTED");
  Shiny.onInputChange("geoloc_lon", "NOT_SUPPORTED");
  }
}

function sucess_pos(position) {
  Shiny.onInputChange("geoloc_lat", position.coords.latitude);
  Shiny.onInputChange("geoloc_lon", position.coords.longitude);
}

function error_pos(error) {
    switch(error.code){
        case error.PERMISSION_DENIED:
            Shiny.onInputChange("geoloc_lat", "PERMISSION_DENIED");
            Shiny.onInputChange("geoloc_lon", "PERMISSION_DENIED");
            break;
        case error.POSITION_UNAVAILABLE:
            Shiny.onInputChange("geoloc_lat", "POSITION_UNAVAILABLE");
            Shiny.onInputChange("geoloc_lon", "POSITION_UNAVAILABLE");
            break;
        case error.TIMEOUT:
            Shiny.onInputChange("geoloc_lat", "TIMEOUT");
            Shiny.onInputChange("geoloc_lon", "TIMEOUT");
            break;
        }
}
