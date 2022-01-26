const express = require("express");
const { get } = require("express/lib/response");
const app = express();
app.use(express.json());
const messagesRouter = require("./routes/messages.routes");

app.use("/messages", messagesRouter);

app.listen(5000, () => console.log("ra l app khedama ya folan fl port", 5000));
