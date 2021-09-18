const express = require("express");
const router = express();
const admin = require("firebase-admin");

const db = admin.firestore();
const usersRef = db.collection('users');

router.get('/', (req, res) => {

    let users = []

    usersRef
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            users.push(doc.data());
        });
        res.status(200).send(users);
    })
    .catch(function(err) {
        console.log(err);
        res.status(400).send("Users not found");
    })

});

module.exports = router;