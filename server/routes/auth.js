const admin = require("firebase-admin");
const express = require("express");
const { auth } = require("firebase-admin");
const router = express();

router.post('/login', (req, res) => {
    
    const {email, password} = req.body;
    
    admin
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        let user = userCredential;
        res.status(200).send(user);
    })
    .catch(err => {
        console.log(err.message);
        console.log("Login Unsuccessful");
        res.send(400);
    });

})

module.exports = router;