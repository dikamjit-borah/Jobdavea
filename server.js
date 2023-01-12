const cors = require("cors")
const express = require("express")
const app = express()

const port = process.env.port || 8081;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log("Server is up!");
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
});

