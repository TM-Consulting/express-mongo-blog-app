const messagesService = require("../services/messages.services");

const createMessage = async (request, response) => {
  const data = await messagesService.createMessage(request.body);
  response.send(data);
};
const getMessage = async (request, response) => {
  const data = await messagesService.getMessage(request.params.msgId);
  response.send(data);
};

const deleteMessage = async (request, response) => {
  const data = await messagesService.deleteMessage(request.params.msgId);
  response.send(data);
};

const filterMessages = async (request, response) => {
  const data = await messagesService.filterMessages(request.query);

  response.send(data);
};
const updateMessage = async (request, response) => {
  const data = await messagesService.updateMessage(
    request.params.msgId,
    request.body
  );

  response.send(data);
};
module.exports = {
  createMessage,
  getMessage,
  deleteMessage,
  filterMessages,
  updateMessage,
};
