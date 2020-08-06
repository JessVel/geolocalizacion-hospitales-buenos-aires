const router = require("express").Router();
const axios = require("axios");

//ruta de mapa con google API
router.get("/mapa-google", (req, res) => {
  res.render("google-map.ejs");
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

//ruta del mapa en leaflet con los marcadores de los hospitales
router.get('/hospitales/mapa', (req,res) =>{
  res.render('leaflet.ejs')
})

module.exports = router;
