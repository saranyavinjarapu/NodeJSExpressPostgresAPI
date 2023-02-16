const { Client } = require("node-postgres");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "Foodie@123",
  port: 5432,
});

const getUsers = async (request, response) => {
  try {
    await client.connect();
    await client
      .query("SELECT * FROM users ORDER BY id ASC")
      .then((res) => {
        response.status(200).json(res.rows);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        client.end();
      });
  } catch {
    console.log("errors");
  }
};

module.exports = {
  getUsers,
};
