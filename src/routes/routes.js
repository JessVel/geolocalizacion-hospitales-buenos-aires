const router = require("express").Router();
const axios = require("axios");
require('dotenv').config()

//ruta de mapa con google API
router.get("/mapa-google", (req, res) => {
  res.render("google-map.ejs", {
    apiKey: process.env.GOOGLE_MAPS_API_KEY
  });
});

//ruta del mapa en leaflet con los marcadores de los hospitales
router.get('/leaflet', async (req,res) =>{
  await axios
    .get(
      "http://cdn.buenosaires.gob.ar/datosabiertos/datasets/hospitales/hospitales.geojson"
    )
    .then((data) => {
      let objetos = data.data.features;
      let hospitales = [];

      objetos.forEach((objeto) => {
        let locationData = {
          position: {
            id: objeto.properties.ID,
            name: objeto.properties.NOMBRE,
            lat: objeto.geometry.coordinates[1],
            lng: objeto.geometry.coordinates[0],
          },
        };
        hospitales.push(locationData);
      });
      res.render('leaflet.ejs', {
        hospitales: hospitales
      })
    })
    .catch((err) => {
      console.log(err);
    });
});

//ruta de json de datos de hospitales de buenos aires
router.get("/hospitales", async (req, res) => {
  await axios
    .get(
      "http://cdn.buenosaires.gob.ar/datosabiertos/datasets/hospitales/hospitales.geojson"
    )
    .then((data) => {
      let objetos = data.data.features;
      let hospitales = [];

      objetos.forEach((objeto) => {
        let locationData = {
          position: {
            id: objeto.properties.ID,
            name: objeto.properties.NOMBRE,
            lat: objeto.geometry.coordinates[1],
            lng: objeto.geometry.coordinates[0],
          },
        };
        hospitales.push(locationData);
        console.log(locationData);
      });
     res.json(hospitales);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
