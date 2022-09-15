const express = require("express");
const app = express();
const cors = require("cors");
const errorhandler = require("errorhandler");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/create_user"));
// get driver connection
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}
const dbo = require("./db/conn");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});