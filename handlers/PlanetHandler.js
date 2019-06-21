class PlanetHandler {

  /**
   * Conditions:
   * day: The day on which we are.
   * radius: the distance between the sun and the planet.
   * movement: how many digrees does the planet move in 1 day.
   * @param {Number} radius 
   * @param {Number} day 
   * @param {Number} movement 
   */
  constructor(radius, movement, day) {
    this.radius = radius;
    this.movement = movement;
    this.day = day;
  }

  /**
   * This method return the real angle of the planet.
   */
  getAngle() {
    return (this.movement * this.day);
  }

  /**
   * This method convert angle to radians
   */
  degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  /**
   * This method is used to get a JSON with the coordinates of the planet position.
   * Conditions:
   * day: The day on which we are.
   * radius: the distance between the sun and the planet.
   * movement: how many digrees does the planet move in 1 day.
   * @param {Number} radius 
   * @param {Number} day 
   * @param {Number} movement 
   */
  static getPosition(radius, day, movement) {
    let _instance = new PlanetHandler(radius, day, movement)
    let angle = _instance.getAngle();
    return {
      x: (Math.cos(_instance.degreesToRadians(angle)) * _instance.radius),
      y: (Math.sin(_instance.degreesToRadians(angle)) * _instance.radius)
    }
  }

}

module.exports = PlanetHandler;