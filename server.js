const express = require("express");
const bodyParser = require("body-parser");
const port = 5001;
const app = express();

const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/users_json", async (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.get("/users", db.getUsers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
