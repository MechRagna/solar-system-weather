const PlanetHandler = require('../handlers/PlanetHandler');
const TriangleHandler = require('../handlers/TriangleHandler');
const MongoHandler = require('../handlers/MongoHandler');

const calcMaxPerimeter = (maxPerimeter, positionV, positionF, positionB, day) => {
  if (maxPerimeter.perimeter < TriangleHandler.getPerimeter(positionV, positionF, positionB) ) {
    maxPerimeter.days = [];
    maxPerimeter.days.push(day);
    maxPerimeter.perimeter = TriangleHandler.getPerimeter(positionV, positionF, positionB);
  } else if ( maxPerimeter.perimeter === TriangleHandler.getPerimeter(positionV, positionF, positionB) ) {
    maxPerimeter.days.push(day)
  };
  return maxPerimeter;
};

const loadAllDays = async () => {
  let daysArr = [];
  let maxPerimeter = {
    days: [],
    perimeter: 0
  };
  for (let day = 0; day < 360; day++) {
    let objDay = {
      dia: day,
      clima: ""
    }
    
    const positionV = PlanetHandler.getPosition(1000, day, 5);
    const positionF = PlanetHandler.getPosition(500, day, -1);
    const positionB = PlanetHandler.getPosition(2000, day, -3);

    if ( TriangleHandler.isInlinePoints(positionV, positionF, positionB) && TriangleHandler.isInlinePoints(positionV, positionF, {x:0, y:0}) ) {
      
      objDay.clima = "sequía";
      daysArr.push(objDay);

    } else if ( TriangleHandler.isInlinePoints(positionV, positionF, positionB) ) {

      objDay.clima = "condiciones óptimas de presión y temperatura";
      daysArr.push(objDay);

    } else if ( TriangleHandler.isSunInsideTriangle(positionV, positionF, positionB) ) {

      calcMaxPerimeter(maxPerimeter, positionV, positionF, positionB, day);
      objDay.clima = "lluvia";
      daysArr.push(objDay);

    } else {

      objDay.clima = "normal";
      daysArr.push(objDay);

    };
  };

  maxPerimeter.days.map((day) => {
    daysArr[day].clima += ` - pico de intensidad`
  });

  let response = await MongoHandler.getCountOfWeather();
  if ( !Array.isArray(response) || response.length == 0 ) {
    await MongoHandler.insertDatesWeather(daysArr);
  };
};

module.exports = {
  loadAllDays
};