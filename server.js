require("dotenv").config()


const cors = require("cors")
const express = require("express")
const routes = require("./routes")

const port = process.env.port || 8081;
const app = express()

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server is up!");
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
});

require("./modules/mongodb.setup")()
routes(app)



