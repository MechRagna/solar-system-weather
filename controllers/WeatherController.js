const MongoHandler = require('../handlers/MongoHandler');

class WeatherController {

  constructor() {}

  errorObjectResponse(error, errorOn) {
    return {
      error,
      errorOn
    }
  }

  getDayNumber(reqDia) {
    try {
      if (reqDia >= 360) {
        let multi = Math.floor(reqDia / 360);
        return ( reqDia - ( 360 * multi ) );
      };
      return reqDia;
    } catch (error) {
      throw errorObjectResponse(error, "Error trying to get day in getDayNumber");
    };
  };

  static async getWeather(req, res) {
    try {
      let _instance = new WeatherController();
      let query = req.query;
      let reqDia = parseInt(query.dia);
      if (reqDia < 0) {
        throw _instance.errorObjectResponse("El parametro día tiene que ser igual o superior a 0", "Error in getWeather");
      }
      let dayNumber = _instance.getDayNumber(reqDia);
      let result = await MongoHandler.getDateWeather(dayNumber);
      if (!result) {
        throw _instance.errorObjectResponse(`No se pudo obtener el día ${reqDia}`, "Error in getWeather");
      }
      res.json( { "dia": reqDia, "clima": result.clima } );
    } catch (error) {
      res.status(400).json({
        status: false,
        error
      });
    };
  };

  static async getPrediction(req, res) {
    try {
      let _instance = new WeatherController();
      let query = req.query;
      let reqYear = query.year ? parseInt( query.year ) : 10;
      if (reqYear < 1) {
        throw _instance.errorObjectResponse("El parametro year tiene que ser igual o superior a 1", "Error in getPrediction");
      }
      let result = await MongoHandler.getCountOfWeather();
      let response = {}
      result.map( (weather) => {
        response[weather._id] = ( weather.total * reqYear );
      } );
      res.json(response);
    } catch (error) {
      res.status(400).json({
        status: false,
        error: error.error,
        errorOn: error.errorOn
      });
    };
  };
};

module.exports = WeatherController;