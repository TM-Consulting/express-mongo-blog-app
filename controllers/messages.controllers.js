const service = require("../services/messages.services");

const create = async (request, response) => {
  const data = await service.insert(request.body);
  response.send(data);
};
const getById = async (request, response) => {
  const data = await service.getById(request.params.id);
  response.send(data);
};

const remove = async (request, response) => {
  const data = await service.deleteById(request.params.id);
  response.send(data);
};

const filter = async (request, response) => {
  const data = await service.filter(request.query);

  response.send(data);
};
const update = async (request, response) => {
  const data = await service.updateById(request.params.id, request.body);

  response.send(data);
};
module.exports = {
  create,
  getById,
  remove,
  filter,
  update,
};
