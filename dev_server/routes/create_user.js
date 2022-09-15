const express = require("express");
 
// registerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const registerRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// // This section will help you get a list of all the records.
// registerRoutes.route("/record").get(function (req, res) {
//  let db_connect = dbo.getDb("befriendsfirst_test");
//  db_connect
//    .collection("user_data")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// // This section will help you get a single record by id
// registerRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("records")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });

 
// This section will help you create a new record.
registerRoutes.post('/create_user', async (req, res, next) => {
  let db_connect = dbo.getDb("befriendsfirst_test"); // <<------- ???
  let myobj = {
    name: req.body.name,
    passwd: req.body.passwd,
    verified: false,
    ias: null,
    lkf: null,
    gender: null,
    zip: null,
    about: null,
    //  email: req.body.email,
    //  zip: req.body.zip,
    //  ias: req.body.ias,
    //  lkf: req.body.lkf,
    //  about: req.body.about,
    //  bk_color: req.body.bk_color,
    //  jam: req.body.jam,
  };
  const result = await db_connect.collection("user_data").insertOne(myobj);
  res.json(result);
});

registerRoutes.post('/update_user', async (req, res, next) => {
  const db_connect = dbo.getDb("befriendsfirst_test");
  let userData = {
    id: req.body.userId,
    ias: req.body.ias,
    gender: req.body.gender,
    lkf: req.body.lkf,
    zip: req.body.zip,
    about: req.body.about,
    bk_color: req.body.bk_color,
  }
  console.log(req)
  const result = await db_connect.collection("user_data").updateOne(
    { _id: ObjectId(req.body.userId) }, 
    { $set: { 
        ias: req.body.ias, 
        lkf: req.body.lkf,
        gender: req.body.gender,
        zip: req.body.zip,
        about: req.body.about
      }},
  );
  res.json(result);
})

// // This section will help you update a record by id.
// registerRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("records")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// // This section will help you delete a record
// registerRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = registerRoutes;

// copied from tutorial 
// https://www.mongodb.com/languages/mern-stack-tutorial