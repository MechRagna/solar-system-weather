class TriangleHandler {

  /**
   * This method 
   * @param {JSON} posA 
   * @param {JSON} posB 
   * @param {JSON} posC 
   */
  constructor(posA, posB, posC) {
    this.posA = posA;
    this.posB = posB;
    this.posC = posC
  }

  /**
   * Method to calculate the area of a triangle.
   */
  getArea() {
    return Math.abs( ( this.posA.x * ( this.posB.y - this.posC.y ) ) + ( this.posB.x * ( this.posC.y - this.posA.y ) ) + ( this.posC.x * ( this.posA.y - this.posB.y ) ) ) / 2;
  }

  /**
   * This method return true if the 3 points are in line and false if not.
   * @param {Object} posA 
   * @param {Object} posB 
   * @param {Object} posC 
   */
  static isInlinePoints(posA, posB, posC) {
    let _instance = new TriangleHandler(posA, posB, posC);
    let area = _instance.getArea();
    return (area == 0);
  }

  /**
   * This method return the perimeter of the triangle.
   * @param {Object} posA 
   * @param {Object} posB 
   * @param {Object} posC 
   */
  static getPerimeter(posA, posB, posC) {
    let _instance = new TriangleHandler(posA, posB, posC);
    let AB = Math.sqrt( Math.pow( (_instance.posB.x - _instance.posA.x), 2) + Math.pow( (_instance.posB.y - _instance.posA.y), 2) );
    let AC = Math.sqrt( Math.pow( (_instance.posC.x - _instance.posA.x), 2) + Math.pow( (_instance.posC.y - _instance.posA.y), 2) );
    let BC = Math.sqrt( Math.pow( (_instance.posC.x - _instance.posB.x), 2) + Math.pow( (_instance.posC.y - _instance.posB.y), 2) );
    return ( AB + AC + BC );
  }

  /**
   * This method return true if the SUN is inside the triangle and false if not.
   * @param {Object} posA 
   * @param {Object} posB 
   * @param {Object} posC 
   */
  static isSunInsideTriangle(posA, posB, posC) {
    let areaOriginalTriangle = new TriangleHandler(posA, posB, posC).getArea();
    let ABTriangle = new TriangleHandler(posA, posB, {x:0,y:0}).getArea();
    let ACTriangle = new TriangleHandler(posA, posC, {x:0,y:0}).getArea();
    let BCTriangle = new TriangleHandler(posB, posC, {x:0,y:0}).getArea();
    return !((ABTriangle + ACTriangle + BCTriangle) > areaOriginalTriangle);
  }

}

module.exports = TriangleHandler;