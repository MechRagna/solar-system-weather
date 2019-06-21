const {
  assert
} = require("chai");
const PlanetHandler = require("../handlers/PlanetHandler");

describe("Testeando PlanetHandler: ", function () {
  
  it("valido que el resultado sea el correcto en X: ", function () {
    result = PlanetHandler.getPosition(1000, 0, -1);
    assert.equal(result.x, 1000);
  });
  it("valido que el resultado sea el correcto en Y: ", function () {
    result = PlanetHandler.getPosition(1000, 0, -1);
    assert.equal(result.y, 0);
  });

  it("valido que el resultado sea el correcto en X: ", function () {
    result = PlanetHandler.getPosition(1000, 23, -3);
    assert.equal(result.x, 358.3679495453004);
  });
  it("valido que el resultado sea el correcto en Y: ", function () {
    result = PlanetHandler.getPosition(1000, 23, -3);
    assert.equal(result.y, -933.5804264972017);
  });

  it("valido que el resultado sea el correcto en X: ", function () {
    result = PlanetHandler.getPosition(5000, 12, 5);
    assert.equal(result.x, 2500.0000000000005);
  });
  it("valido que el resultado sea el correcto en Y: ", function () {
    result = PlanetHandler.getPosition(5000, 12, 5);
    assert.equal(result.y, 4330.1270189221932);
  });

  it("Valido que el resultado sea un Objecto: ", function () {
    result = PlanetHandler.getPosition(1000, 0, -1);
    assert.typeOf(result, "Object");
  });
  
});