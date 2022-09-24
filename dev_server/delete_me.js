// server/.env should be:

// MAIL_USER=your_new_email_address@gmail.com
// MAIL_PASS=your_new_password


/* ************* */
/* USER.MODEL.JS */
/* ************* */


const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
const fields = {
  email: {
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  }
}

// One nice, clean line to create the Schema.
const userSchema = new Schema(fields)

module.exports = mongoose.model('User', userSchema)


/* ********* */
/* SERVER.JS */
/* ********* */


require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const emailController = require('./email/email.controller')
const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config')

// Only allow requests from our client
app.use(cors({
  origin: CLIENT_ORIGIN
}))

// Allow the app to accept JSON on req.body
app.use(express.json())

// This endpoint is pinged every 5 mins by uptimerobot.com to prevent 
// free services like Heroku an d Now.sh from letting the app go to sleep.
// This endpoint is also pinged every time the client starts in the 
// componentDidMount of App.js. Once the app is confirmed to be up, we allow 
// the user to perform actions on the client.
app.get('/wake-up', (req, res) => res.json('👌'))

// This is the endpoint that is hit from the onSubmit handler in Landing.js
// The callback is shelled off to a controller file to keep this file light.
app.post('/email', emailController.collectEmail)

// Same as above, but this is the endpoint pinged in the componentDidMount of 
// Confirm.js on the client.
app.get('/email/confirm/:id', emailController.confirmEmail)

// Catch all to handle all other requests that come into the app. 
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

// To get rid of all those semi-annoying Mongoose deprecation warnings.
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}

// Connecting the database and then starting the app.
mongoose.connect(DB_URL, options, () => {
  app.listen(PORT, () => console.log('👍'))
})
// The most likely reason connecting the database would error out is because 
// Mongo has not been started in a separate terminal.
.catch(err => console.log(err))


/* ******************* */
/* EMAIL.CONTROLLER.JS */
/* ******************* */


const User = require('../user.model')
const sendEmail = require('./email.send')
const msgs = require('./email.msgs')
const templates = require('./email.templates')

// The callback that is invoked when the user submits the form on the client.
exports.collectEmail = (req, res) => {
  const { email } = req.body
  
  User.findOne({ email })
    .then(user => {
      
      // We have a new user! Send them a confirmation email.
      if (!user) {
        User.create({ email })
          .then(newUser => sendEmail(newUser.email, templates.confirm(newUser._id)))
          .then(() => res.json({ msg: msgs.confirm }))
          .catch(err => console.log(err))
      }

      // We have already seen this email address. But the user has not
      // clicked on the confirmation link. Send another confirmation email.
      else if (user && !user.confirmed) {
        sendEmail(user.email, templates.confirm(user._id))
          .then(() => res.json({ msg: msgs.resend }))
      }

      // The user has already confirmed this email address
      else {
        res.json({ msg: msgs.alreadyConfirmed })
      }

    })
    .catch(err => console.log(err))
}

// The callback that is invoked when the user visits the confirmation
// url on the client and a fetch request is sent in componentDidMount.
exports.confirmEmail = (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then(user => {

      // A user with that id does not exist in the DB. Perhaps some tricky 
      // user tried to go to a different url than the one provided in the 
      // confirmation email.
      if (!user) {
        res.json({ msg: msgs.couldNotFind })
      }
      
      // The user exists but has not been confirmed. We need to confirm this 
      // user and let them know their email address has been confirmed.
      else if (user && !user.confirmed) {
        User.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: msgs.confirmed }))
          .catch(err => console.log(err))
      }

      // The user has already confirmed this email address.
      else  {
        res.json({ msg: msgs.alreadyConfirmed })
      }

    })
    .catch(err => console.log(err))
}


/* ************* */
/* EMAIL.MSGS.JS */
/* ************* */


module.exports = {
    confirm: 'Email sent, please check your inbox to confirm',
    confirmed: 'Your email is confirmed!',
    resend: 'Confirmation email resent, maybe check your spam?',
    couldNotFind: 'Could not find you!',
    alreadyConfirmed: 'Your email was already confirmed'
  }


/* ************* */
/* EMAIL.SEND.JS */
/* ************* */


const nodemailer = require('nodemailer')

// The credentials for the email account you want to send mail from. 
const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS  
  }
}

// Getting Nodemailer all setup with the credentials for when the 'sendEmail()'
// function is called.
const transporter = nodemailer.createTransport(credentials)

// exporting an 'async' function here allows 'await' to be used
// as the return value of this function.
module.exports = async (to, content) => {
  
  // The from and to addresses for the email that is about to be sent.
  const contacts = {
    from: process.env.MAIL_USER,
    to
  }
  
  // Combining the content and contacts into a single object that can
  // be passed to Nodemailer.
  const email = Object.assign({}, content, contacts)
  
  // This file is imported into the controller as 'sendEmail'. Because 
  // 'transporter.sendMail()' below returns a promise we can write code like this
  // in the contoller when we are using the sendEmail() function.
  //
  //  sendEmail()
  //   .then(() => doSomethingElse())
  // 
  // If you are running into errors getting Nodemailer working, wrap the following 
  // line in a try/catch. Most likely is not loading the credentials properly in 
  // the .env file or failing to allow unsafe apps in your gmail settings.
  await transporter.sendMail(email)

}


/* ****************** */
/* EMAIL.TEMPLATES.JS */
/* ****************** */


const { CLIENT_ORIGIN } = require('../config')

// This file is exporting an Object with a single key/value pair.
// However, because this is not a part of the logic of the application
// it makes sense to abstract it to another file. Plus, it is now easily 
// extensible if the application needs to send different email templates
// (eg. unsubscribe) in the future.
module.exports = {

  confirm: id => ({
    subject: 'React Confirm Email',
    html: `
      <a href='${CLIENT_ORIGIN}/confirm/${id}'>
        click to confirm email
      </a>
    `,      
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
  })
  
}