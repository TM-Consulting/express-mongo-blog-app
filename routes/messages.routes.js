const express = require("express");
const messagesController = require("../controllers/messages.controllers");
const router = express.Router();

router.post("", messagesController.createMessage);

router.get("/:msgId", messagesController.getMessage);

router.get("", messagesController.filterMessages);

module.exports = router;
