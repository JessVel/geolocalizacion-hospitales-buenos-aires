"use strict";

var router = require("express").Router();

var axios = require("axios"); //ruta de mapa con google API


router.get("/mapa-google", function (req, res) {
  res.render("google-map.ejs");
}); //ruta de json de datos de hospitales de buenos aires

router.get("/hospitales", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get("http://cdn.buenosaires.gob.ar/datosabiertos/datasets/hospitales/hospitales.geojson").then(function (data) {
            var objetos = data.data.features;
            var hospitales = [];
            objetos.forEach(function (objeto) {
              var locationData = {
                position: {
                  id: objeto.properties.ID,
                  name: objeto.properties.NOMBRE,
                  lat: objeto.geometry.coordinates[1],
                  lng: objeto.geometry.coordinates[0]
                }
              };
              hospitales.push(locationData);
              console.log(locationData);
            });
            res.json(hospitales);
          })["catch"](function (err) {
            console.log(err);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); //ruta del mapa en leaflet con los marcadores de los hospitales

router.get('/hospitales/mapa', function (req, res) {
  res.render('leaflet.ejs');
});
module.exports = router;