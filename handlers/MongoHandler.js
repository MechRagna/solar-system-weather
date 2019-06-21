const MongoClient = require('mongodb').MongoClient;

class MongoHandler {
  
  constructor() {
    this.mongoUri = "mongodb://admin:UQ8PYHad8PhLPDosQvRHYcCtfUuhCFXR8scRmKY2@ds139937.mlab.com:39937/solar-system-weather";
    this.databaseName = "solar-system-weather";
    this.collectionName = "date-weather";
  }

  /**
   * This method is used to return an object error
   * @param {Object} error 
   * @param {String} errorOn 
   */
  errorObjectResponse(error, errorOn) {
    return {
      error,
      errorOn
    };
  };

  /**
   * This method create the client to connect with mongo.
   * @param {String} mongoUri 
   */
  async createClient(mongoUri) {
    try {
      return await MongoClient.connect(mongoUri, {
        useNewUrlParser: true
      }).then(client => client)
    } catch (error) {
      // let _instance = new MongoHandler();
      throw errorObjectResponse(error, "Error trying to create client in createClient");
    };
  };

  /**
   * This method connect with the DB especified.
   * @param {Client} client 
   * @param {String} dbName 
   */
  async connectDB(client, dbName) {
    try {
      return await client.db(dbName);
    } catch (error) {
      // let _instance = new MongoHandler();
      throw errorObjectResponse(error, "Error trying to connect with DB in connectDB");
    };
  };

  /**
   * This methos retrive the collection specified.
   * @param {db} db 
   * @param {String} collection
   */
  async getCollection(db, collection) {
    try {
      return await db.collection(collection)
    } catch (error) {
      // let _instance = new MongoHandler();
      throw errorObjectResponse(error, "Error trying to connect with DB in connectDB");
    };
  };

  /**
   * This method insert documents in the database
   * @param {Array} documentsArr
   */
  static async insertDatesWeather(documentsArr) {
    try {
      let _instance = new MongoHandler();
      const client = await _instance.createClient(_instance.mongoUri);
      const db = await _instance.connectDB(client, _instance.databaseName);
      const collection = await _instance.getCollection(db, _instance.collectionName);
      return await collection.insertMany(documentsArr);
    } catch (error) {
      // let _instance = new MongoHandler();
      throw errorObjectResponse(error, "Error trying to insert many documents in insertDatesWeather");
    };
  };

  /**
   * This method return the weather for a specific day
   * @param {Number} numDate
   */
  static async getDateWeather(numDate) {
    try {
      let _instance = new MongoHandler();
      const client = await _instance.createClient(_instance.mongoUri);
      const db = await _instance.connectDB(client, _instance.databaseName);
      const collection = await _instance.getCollection(db, _instance.collectionName);
      const [result] = await collection.find({
        "dia": parseInt(numDate)
      }).toArray();
      return result;
    } catch (error) {
      let _instance = new MongoHandler();
      throw _instance.errorObjectResponse(error, "Error trying to get documents in getDateWeather");
    };
  };

  /**
   * This method returns the number of repetitions of each weather.
   */
  static async doQueryRequest(query) {
    try {
      let _instance = new MongoHandler();
      const client = await _instance.createClient(_instance.mongoUri);
      const db = await _instance.connectDB(client, _instance.databaseName);
      const collection = await _instance.getCollection(db, _instance.collectionName);
      return await collection.aggregate(query).toArray();
    } catch (error) {
      let _instance = new MongoHandler();
      throw _instance.errorObjectResponse(error, "Error trying to get count of weather in getCountOfWeather");
    };
  };
};

module.exports = MongoHandler;