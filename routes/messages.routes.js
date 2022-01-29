const express = require("express");
const messagesController = require("../controllers/messages.controllers");
const router = express.Router();

router.post("", messagesController.createMessage);

router.get("/:msgId", messagesController.getMessage);

router.delete("/:msgId", messagesController.deleteMessage);

router.put("/:msgId", messagesController.updateMessage);

router.get("", messagesController.filterMessages);

module.exports = router;
