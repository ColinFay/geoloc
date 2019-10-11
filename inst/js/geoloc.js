function getLocation(id = "geoloc") {

  var lat_input = id  + "_lat";
  var lon_input = id  + "_lon";

  function sucess_pos(position) {
    Shiny.onInputChange(lat_input, position.coords.latitude);
    Shiny.onInputChange(lon_input, position.coords.longitude);
  }

  function error_pos(error) {
    switch(error.code){
        case error.PERMISSION_DENIED:
            Shiny.onInputChange(lat_input, "PERMISSION_DENIED");
            Shiny.onInputChange(lon_input, "PERMISSION_DENIED");
            break;
        case error.POSITION_UNAVAILABLE:
            Shiny.onInputChange(lat_input, "POSITION_UNAVAILABLE");
            Shiny.onInputChange(lon_input, "POSITION_UNAVAILABLE");
            break;
        case error.TIMEOUT:
            Shiny.onInputChange(lat_input, "TIMEOUT");
            Shiny.onInputChange(lon_input, "TIMEOUT");
            break;
        }
}

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    sucess_pos,
    error_pos,
    {enableHighAccuracy:true, maximumAge:30000, timeout:27000});
  } else {
  alert("Geolocation is not supported by this browser.");
  Shiny.onInputChange(id + "_lat", "NOT_SUPPORTED");
  Shiny.onInputChange(id + "_lon", "NOT_SUPPORTED");
  }
}

