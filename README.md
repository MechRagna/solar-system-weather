# Sistema Solar

## Descripción del Proyecto
El proyecto esta planeado para predecir los próximos 10 años día a día del sistema solar planteado y responder a la consulta del clima para un día especifico.

## Concideraciones
 - Se tomó como 1 año 360 días, se utilizó para unificar los tres planetas.

## Instalación del Proyecto:
Luego de clonar el repositorio:

```
npm install
```

## Ejecución del Proyecto:

```
npm start
```

## URL:
- https://solar-system-weather-ml.appspot.com/  

# APIs:

URL: https://solar-system-weather-ml.appspot.com/  
Method: GET  
Descripcion: Este servicio indica la cantidad de días de lluvias, sequía, normal y lluvias maximas que hubo en los proximos 10 años.  

Query:  
- year: 
    - obligatorio: no.
    - descripcion: Si este valor no se especifica toma el valor de 10 sino el valor especificado.  

Ej:  
- https://solar-system-weather-ml.appspot.com/ -> devuelve la información de los próximos 10 años
- https://solar-system-weather-ml.appspot.com?year=50  -> devuelve la información de los próximos 50 años

---

URL: https://solar-system-weather-ml.appspot.com/clima  
Method: GET  
Descripcion: Este servicio indica el clima del día especificado.  

Query:  
- dia: 
    - obligatorio: si.
    - descripcion: El número de día que se desea consultar.  

# Configuración del Proyecto

## Listado de librerias utilizadas:
 - express
 - mongodb
 - cors

## Listado de librerias Develop (Test):
 - mocha
 - chai

## Base de datos:
 - Version: MongoDB: 3.6.12
 - URI: mongodb://admin:UQ8PYHad8PhLPDosQvRHYcCtfUuhCFXR8scRmKY2@ds139937.mlab.com:39937/solar-system-weather
 - User: admin
 - Pass: UQ8PYHad8PhLPDosQvRHYcCtfUuhCFXR8scRmKY2