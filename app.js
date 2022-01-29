const express = require("express");
const variables = require("./config/variables");

const app = express();
app.use(express.json());
const genericRouter = require("./routes/generic.routes");

app.use("/messages", genericRouter("messages"));
app.use("/posts", genericRouter("posts"));

app.listen(variables.PORT, () =>
  console.log("ra l app khedama ya folan fl port", variables.PORT)
);
