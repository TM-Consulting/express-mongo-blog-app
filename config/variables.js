require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const MONGO_DB_URI = process.env.DB_ATLAS_URI;
const PORT = process.env.PORT;

module.exports = {
  DATABASE_NAME,
  MONGO_DB_URI,
  PORT,
};
