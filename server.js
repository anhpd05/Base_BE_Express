require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./config/database");

const app = express();
const port = process.env.PORT;
const routeAPI = require("./api/v1/routes/index");
// Kết nối cơ sở dữ liệu
database.connect();

//Routes Ver 1
routeAPI(app);

// parse application/json
app.use(bodyParser.json());

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// kết nối frontEnd
app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
