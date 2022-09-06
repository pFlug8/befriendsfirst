# BeFriendsFirst
## nateconsulting.tech

A PII-free dating app

### Local Deployment

- Clone this repositiory to a local directory
- In terminal, run ```npm install``` at the project root
- Next run the following commands:
  - ```cd dev_server```
  - Run ```npm insall``` again
  - ```echo "ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.rnkbabn.mongodb.net/?retryWrites=true&w=majority" >> config.env```
- In one terminal, inside the dev_server directory, enter ```node server.js```. It should produce no errors
- In a second terminal pointed at the project root enter ```npm start``` to start up the front end.