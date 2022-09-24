const express = require("express");
 
// registerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const registerRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const sendMail = require("../email.send");
const templates = require("../email.templates");

//This section will help you create a new record.
registerRoutes.post('/create_user', async (req, res, next) => {
  const userEmail = req.body.email;
  let db_connect = dbo.getDb("befriendsfirst_test");
  let newUser = {
    name: req.body.name,
    passwd: req.body.passwd,
    verified: false,
    ias: null,
    lkf: null,
    gender: null,
    zip: null,
    about: null,
    bk_color: null,
    jam: null
  };
  await db_connect.collection("user_data").insertOne(newUser)
    .then(response => {
      // insert failed check here {acknowledged: false} then render error msg
      const userId = response.insertedId;
      sendMail(userEmail, templates.confirm(userId));
      res.json(response) // <--- need to send back message to confirm email and username??
    })
    .catch(err => {
      console.log(err);
      next(err);
    });

});

registerRoutes.get('/confirm/:id', async (req, res, next) => {
  const db_connect = dbo.getDb("befriendsfirst_test");
  const id = ObjectId(req.params.id);

  await db_connect.collection("user_data").updateOne(
    { _id: id },
    { $set: {
      verified: true
      }
    })
    .then(response => {
      res.redirect(301, `http://localhost:3000/register/2/${id}`)
    })
    
})

registerRoutes.post('/update_user/:id', async (req, res, next) => {
  const db_connect = dbo.getDb("befriendsfirst_test");
  const id = ObjectId(req.params.id);
  // should put a findOne check here
  const result = await db_connect.collection("user_data").updateOne(
    { _id: id }, 
    { $set: { 
        ias: req.body.ias, 
        lkf: req.body.lkf,
        gender: req.body.gender,
        zip: req.body.zip,
        about: req.body.about
      }},
  );
  console.log(result);
  res.json(result);
  // res.redirect(301, `http://localhost:3000/dashboard/${id}`);
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