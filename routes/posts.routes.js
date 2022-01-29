const express = require("express");
const controller = require("../controllers/generic.controllers");
const router = express.Router();

router.post("", controller("posts").create);

router.get("/:id", controller("posts").getById);

router.delete("/:id", controller("posts").remove);

router.put("/:id", controller("posts").update);

router.get("", controller("posts").filter);

module.exports = router;
