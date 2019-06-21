const express = require('express');
const cors = require('cors');
const app = express();
const solarSystemApi = require('./api/solarSystemApi');
const job = require('./job/job');

// Se pone la configuración standard de CORS para hacerlo accesible desde cualquier dominio
app.use(cors());

// Se disponibilizan las API del sistema solar.
app.use(solarSystemApi);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  job.loadAllDays();
  console.log(`Server levantado en el puerto ${PORT}`)
})