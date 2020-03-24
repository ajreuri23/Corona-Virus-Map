import L from "leaflet";
import { getCountries } from "./api.js";
var mymap;

const mapCreation = id => {
  mymap = L.map(`${id}`).setView([51.505, -0.09], 4);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 8,
      minZoom: 2,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYWpyZXVyaTIzIiwiYSI6ImNrODRmZXNmZTAycjAzZnFvZ3Zyb3J5a2cifQ.j5hlhNSxAnHqRr4HvYMkgA"
    }
  ).addTo(mymap);
};

const putDots = async () => {
  let result = await getCountries();
  result.forEach(country => {
    let popup = L.popup()
      .setLatLng([country.coordinates.latitude, country.coordinates.longitude])
      .setContent(
        `<h1>${country.country}</h1><p>Cases: ${country.latest.confirmed}</p><p>Deaths: ${country.latest.deaths}</p>`
      );

    L.circleMarker(
      [country.coordinates.latitude, country.coordinates.longitude],
      {
        radius: country.latest.confirmed / 2000 + 5,
        fillColor: "#FF0000", // "#28ea3f",//"#0163FF",
        color: "#A9F6B2", //"#0163FF",
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      }
    )
      .bindPopup(popup)
      .on("mouseover", function() {
        this.openPopup();
      })
      .on("mouseout", function() {
        this.closePopup();
      })
      .addTo(mymap);
    mymap.setMaxBounds([
      [-100, -190],
      [100, 190]
    ]);
  });
};

export { mapCreation, putDots };
