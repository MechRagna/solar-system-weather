const {
  assert
} = require("chai");
const MongoHandler = require("../handlers/MongoHandler");

describe("Testeando MongoHandler: ", function () {
  
  it("valido que se inserten correctamente datos en la base de mongoDB: ", async function () {
    result = await MongoHandler.insertDatesWeather([{"dia": 404, "clima":"lluvia"}, {"dia": 44, "clima":"normal"}]);
    assert.equal(result.insertedCount, 2);
  });

  it("valido que se obtengan correctamente datos en la base de mongoDB: ", async function () {
    result = await MongoHandler.getDateWeather(404);
    assert.equal(result.clima, "lluvia");
  });

  it("valido que el tipo de dato sea el correcto en la respuesta: ", async function () {
    result = await MongoHandler.doQueryRequest();
    assert.typeOf(result, "Array");
  });
  
});