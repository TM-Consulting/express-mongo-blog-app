const messagesService = require("../services/messages.services");

const createMessage = (request, response) => {
  response.send(messagesService.createMessage(request.body));
};
const getMessage = (request, response) => {
  response.send(messagesService.getMessage(request.params.msgId));
};
const filterMessages = (request, response) => {
  response.send(messagesService.filterMessages(request.query));
};

module.exports = { createMessage, getMessage, filterMessages };
