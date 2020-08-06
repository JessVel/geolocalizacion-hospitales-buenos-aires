# Geolocalizacion de Hospitales de Buenos Aires con Node.js 🌎

## To run this code🚀
`npm install`
    
## Demo geolocalización de hospitales de Buenos Aires

### Vista de mapa Leaflet + Node.js
![ScreenShot](https://raw.github.com/JessVel/geolocalizacion-hospitales-buenos-aires/master/src/public/images/Geolocalizacion-con-leaflet.png) 
![ScreenShot](https://raw.github.com/JessVel/geolocalizacion-hospitales-buenos-aires/master/src/public/images/Geolocalizacion-con-leaflet(1).png) 

#### Intereacciones con el mapa:
📍 Popups que muestran nombre del hospital al hacer click en los marcadores. <br>
📍Popups que muestran las coordenadas de cualquier lugar donde se haga click.

## Demo geolocalización de dispositivo con Google API

### Vista de mapa Google
![ScreenShot](https://raw.github.com/JessVel/geolocalizacion-hospitales-buenos-aires/master/src/public/images/Geolocation-con-Google-API.png) 

⚠️Ingresar tu API KEY de Google para poder visualizar el mapa.<br>
⚠️Para poder ver la ubicación del dispositivo primero hay que dar permiso al navegador para acceder a la ubicación.

#### Add your API KEY from Google at:
📁src <br>
  📁Views<br>
    📑google-map.ejs<br>
      ` <script defer
      src="https://maps.googleapis.com/maps/api/js?key={YOURAPIKEY}&callback=initMap">
      </script>`
