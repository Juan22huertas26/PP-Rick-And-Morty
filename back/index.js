require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001
const { bdd } = require('./src/controller/controller.js')
// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    bdd();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});