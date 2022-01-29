const Mongo = require("../config/mongodbConnect");

const mongoDBServices = (collection) => {
  const create = (data) => Mongo.getDb().collection(collection).insertOne(data);

  const remove = (id) =>
    Mongo.getDb().collection(collection).deleteOne({ _id: id });

  const getOneById = (id) =>
    Mongo.getDb().collection(collection).findOne({ _id: id });

  const getByFilters = (filters) =>
    Mongo.getDb().collection(collection).find(filters).toArray();

  const update = (id, data) =>
    Mongo.getDb()
      .collection(collection)
      .updateOne({ _id: id }, { $set: data }, { upsert: true });

  return { create, remove, getOneById, getByFilters, update };
};
module.exports = mongoDBServices;
