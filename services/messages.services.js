const { ObjectId } = require("mongodb");
const mongoService = require("../utils/mongoRequests");

const { create, getOneById, getByFilters, remove, update } =
  mongoService("messages");
const createMessage = async (message) => {
  try {
    const data = await create(message);
    return data;
  } catch (err) {
    return err;
  }
};

const getMessage = async (id) => {
  try {
    const data = await getOneById(ObjectId(id));
    return data;
  } catch (err) {
    return err;
  }
};

const deleteMessage = async (id) => {
  try {
    const data = await remove(ObjectId(id));
    return data;
  } catch (err) {
    return err;
  }
};

const filterMessages = async (data) => {
  try {
    const res = await getByFilters(data);

    return res;
  } catch (err) {
    return err;
  }
};

const updateMessage = async (id, data) => {
  try {
    const res = await update(ObjectId(id), data);
    return res;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createMessage,
  getMessage,
  deleteMessage,
  filterMessages,
  updateMessage,
};
