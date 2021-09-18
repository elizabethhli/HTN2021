const admin = require("firebase-admin");

var serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const usersRoute = require("./routes/users");

app.use('/api/users', usersRoute);


app.listen(5001, () =>{
    console.log("Listening on port 5001");
})
