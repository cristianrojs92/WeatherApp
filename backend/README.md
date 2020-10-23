# Backend WeatherApp
API encargada de disponer la informacion sobre el clima actual y sobre los proximos 5 dias

# Instalacion de dependencias
npm install

# Comando para inicial la aplicacion
npm start

# Detalles de la API

  ### Location
    `Ruta: /v1/location`
    `Metodo HTTP: GET`
    `Descripcion: Metodo utilizado para obtener la ciudad del cliente segun su ip`
  
  #### Respuesta

    { "city": "Quilmes" }

   ### Current
    `Ruta 1: /v1/current`
    `Ruta 2: /v1/current/:city`

    `Metodo HTTP: GET`
    `Descripcion: Metodo utilizado para obtener la informacion del clima actual segun la ip del cliente o cuidad`
  
  #### Respuesta

  { "city": "Quilmes",
    "temp": 21,
    "description": "nubes",
    "urlIcon": "http://openweathermap.org/img/wn/04d@2x.png",
    "tempMin": 20,
    "tempMax": 22,
    "humidity": 82,
    "date": "23/10/2020" }

  ### Forecast
    `Ruta 1: /v1/forecast`
    `Ruta 2: /v1/forecast/:city`

    `Metodo HTTP: GET`
    `Descripcion: Metodo utilizado para obtener la informacion del clima actual segun la ip del cliente o cuidad para los proximos 5 dias`
  
  #### Respuesta

  [
    {
      "city": "Quilmes",
      "temp": 21,
      "description": "nubes",
      "urlIcon": "http://openweathermap.org/img/wn/04d@2x.png",
      "tempMin": 21,
      "tempMax": 21,
      "humidity": 80,
      "date": "24/10/2020"
    },
    {
      "city": "Quilmes",
      "temp": 19,
      "description": "lluvia de gran intensidad",
      "urlIcon": "http://openweathermap.org/img/wn/10d@2x.png",
      "tempMin": 19,
      "tempMax": 19,
      "humidity": 95,
      "date": "25/10/2020"
    },
    {
      "city": "Quilmes",
      "temp": 20,
      "description": "cielo claro",
      "urlIcon": "http://openweathermap.org/img/wn/01d@2x.png",
      "tempMin": 20,
      "tempMax": 20,
      "humidity": 41,
      "date": "26/10/2020"
    },
    {
      "city": "Quilmes",
      "temp": 20,
      "description": "cielo claro",
      "urlIcon": "http://openweathermap.org/img/wn/01d@2x.png",
      "tempMin": 20,
      "tempMax": 20,
      "humidity": 49,
      "date": "27/10/2020"
    },
    {
      "city": "Quilmes",
      "temp": 13,
      "description": "lluvia ligera",
      "urlIcon": "http://openweathermap.org/img/wn/10d@2x.png",
      "tempMin": 13,
      "tempMax": 13,
      "humidity": 82,
      "date": "28/10/2020"
    }
  ]
  

