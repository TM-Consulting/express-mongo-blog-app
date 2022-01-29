const { ObjectId } = require("mongodb");
const mongoService = require("../utils/mongoRequests");

const { create, getOneById, getByFilters, remove, update } =
  mongoService("posts");
const insert = async (newObject) => {
  try {
    const data = await create(newObject);
    return data;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const data = await getOneById(ObjectId(id));
    return data;
  } catch (err) {
    return err;
  }
};

const deleteById = async (id) => {
  try {
    const data = await remove(ObjectId(id));
    return data;
  } catch (err) {
    return err;
  }
};

const filter = async (data) => {
  try {
    const res = await getByFilters(data);

    return res;
  } catch (err) {
    return err;
  }
};

const updateById = async (id, data) => {
  try {
    const res = await update(ObjectId(id), data);
    return res;
  } catch (err) {
    return err;
  }
};

module.exports = {
  insert,
  getById,
  deleteById,
  filter,
  updateById,
};
