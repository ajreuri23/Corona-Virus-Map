import L from "leaflet";

const mapCreation = id => {
  var mymap = L.map(`${id}`).setView([51.505, -0.09], 4);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 8,
      minZoom: 3,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYWpyZXVyaTIzIiwiYSI6ImNrODRmZXNmZTAycjAzZnFvZ3Zyb3J5a2cifQ.j5hlhNSxAnHqRr4HvYMkgA"
    }
  ).addTo(mymap);
};

export {mapCreation};
