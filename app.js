const express = require("express");
const variables = require("./config/variables");

const app = express();
app.use(express.json());
const messagesRouter = require("./routes/messages.routes");

app.use("/messages", messagesRouter);

app.listen(variables.PORT, () =>
  console.log("ra l app khedama ya folan fl port", variables.PORT)
);
