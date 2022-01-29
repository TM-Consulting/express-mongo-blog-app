const express = require("express");
const controller = require("../controllers/messages.controllers");
const router = express.Router();

router.post("", controller.create);

router.get("/:id", controller.getById);

router.delete("/:id", controller.remove);

router.put("/:id", controller.update);

router.get("", controller.filter);

module.exports = router;
