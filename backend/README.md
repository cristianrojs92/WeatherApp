# Backend WeatherApp
API encargada de disponer la informacion sobre el clima actual y sobre los proximos 5 dias

# Instalacion de dependencias
npm install

# Comando para inicial la aplicacion
npm start

# Detalles de la API

  ### Location
  `Ruta: /v1/location`
  `Metodo Http: GET`
  `Descripcion: Metodo utilizado para obtener la ciudad del cliente segun su ip`
  
  #### Respuesta

  `{ "city": "Quilmes" }`

   ### Current
  `Ruta 1: /v1/current`
  `Ruta 2: /v1/current/:city`

  `Metodo Http: GET`
  `Descripcion: Metodo utilizado para obtener la informacion del clima actual segun la ip del cliente o cuidad`
  
  #### Respuesta

  `{ "city": "Quilmes",`
  `  "temp": 21,`
  `  "description": "nubes",`
  `  "urlIcon": "http://openweathermap.org/img/wn/04d@2x.png",`
  `  "tempMin": 20,`
  `  "tempMax": 22,`
  `  "humidity": 82,`
  `  "date": "23/10/2020" }`
  

