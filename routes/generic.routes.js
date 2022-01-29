const express = require("express");
const controller = require("../controllers/generic.controllers");

const genericRouter = (collectionName) => {
  const router = express.Router();
  router.post("", controller(collectionName).create);

  router.get("/:id", controller(collectionName).getById);

  router.delete("/:id", controller(collectionName).remove);

  router.put("/:id", controller(collectionName).update);

  router.get("", controller(collectionName).filter);
  return router;
};

module.exports = genericRouter;
