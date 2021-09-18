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

router.post('/', (req, res) => {

    let {email, password, name, program, year, picture, introduction, hobbies, interests} = req.body;

    admin.auth().createUser({
        email: email,
        password: password,
        name: name,
        program: program, 
        year: year,
        picture: picture,
        introduction: introduction,
        interests: interests,
        hobbies: hobbies
    })
    .then((newUser)=> {
        usersRef.add((JSON.parse(JSON.stringify(newUser))))
        .then(()=> {
            res.status(200).send("User successfully added");
        })
        .catch(err => {
            console.log(err);
            console.log("User Already exists");        
        })
    })


});

module.exports = router;