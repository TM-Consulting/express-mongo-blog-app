const { MongoClient } = require("mongodb");
const variables = require("./variables");
const uri = variables.MONGO_DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;
client.connect(function (err, db) {
  if (!db) return;
  dbConnection = db.db(variables.DATABASE_NAME);
  console.log("Successfully connected to MongoDB.");
});
module.exports = {
  getDb: function () {
    return dbConnection;
  },
};
