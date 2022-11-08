const express = require("express");
const notFound = require("./middlewares/not-found");

const app = express();

const rootRouter = require("./routes/root/root.router");

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

app.use("/", rootRouter);

app.use(notFound);

module.exports = app;
