const {
  assert
} = require("chai");
const TriangleHandler = require("../handlers/TriangleHandler");

describe("Testeando TriangleHandler: ", function () {
  
  it("Valido el metodo isInlinePoints en un caso correcto: ", function () {
    result = TriangleHandler.isInlinePoints({x:20, y:20}, {x:40, y:40}, {x:60, y:60});
    assert.equal(result, true);
  });
  it("Valido el metodo isInlinePoints en un caso incorrecto: ", function () {
    result = TriangleHandler.isInlinePoints({x:20, y:20}, {x:90, y:190}, {x:60, y:60});
    assert.equal(result, false);
  });

  it("Valido el tipo de dato del metodo isInlinePoints en un caso correcto: ", function () {
    result = TriangleHandler.isInlinePoints({x:20, y:20}, {x:40, y:40}, {x:60, y:60});
    assert.typeOf(result, "Boolean");
  });
  it("Valido el tipo de dato del metodo isInlinePoints en un caso incorrecto: ", function () {
    result = TriangleHandler.isInlinePoints({x:20, y:20}, {x:90, y:190}, {x:60, y:60});
    assert.typeOf(result, "Boolean");
  });



  it("Valido el metodo getPerimeter: ", function () {
    result = TriangleHandler.getPerimeter({x:-2, y:5}, {x:4, y:3}, {x:7, y:-2});
    assert.equal(result, 23.557261466173436);
  });

  it("Valido el tipo de dato del metodo getPerimeter sea numerico: ", function () {
    result = TriangleHandler.getPerimeter({x:20, y:20}, {x:40, y:40}, {x:60, y:60});
    assert.typeOf(result, "Number");
  });


  it("Valido el metodo getArea: ", function () {
    result = new TriangleHandler({x:1, y:-4}, {x:3, y:2}, {x:-2, y:0}).getArea();
    assert.equal(result, 13);
  });
  it("Valido el metodo getArea: ", function () {
    result = new TriangleHandler({x:-2, y:3}, {x:3, y:-1}, {x:5, y:6}).getArea();
    assert.equal(result, 21.5);
  });
  it("Valido el tipo de dato del metodo getArea sea numerico: ", function () {
    result = new TriangleHandler({x:-2, y:3}, {x:3, y:-1}, {x:5, y:6}).getArea();
    assert.typeOf(result, "Number");
  });

  it("Valido el metodo isSunInsideTriangle en un caso false: ", function () {
    result = TriangleHandler.isSunInsideTriangle({x:0,y:1}, {x:1,y:1}, {x:1,y:0});
    assert.equal(result, false);
  });
  it("Valido el metodo isSunInsideTriangle en un caso verdadero: ", function () {
    result = TriangleHandler.isSunInsideTriangle({x:10,y:-10}, {x:-10,y:10}, {x:10,y:10});
    assert.equal(result, true);
  });
  it("Valido el tipo de dato del metodo isSunInsideTriangle sea Boolean en caso verdadero: ", function () {
    result = TriangleHandler.isSunInsideTriangle({x:10,y:-10}, {x:-10,y:10}, {x:10,y:10});
    assert.typeOf(result, "Boolean");
  });
  it("Valido el tipo de dato del metodo isSunInsideTriangle sea Boolean en caso false: ", function () {
    result = TriangleHandler.isSunInsideTriangle({x:0,y:1}, {x:1,y:1}, {x:1,y:0});
    assert.typeOf(result, "Boolean");
  });
  
});