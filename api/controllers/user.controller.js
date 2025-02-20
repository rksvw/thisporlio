const {db} = require('../db/sql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Create a new user
async function signup(req, res) {
    console.log(req.body);
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const {firstName, lastName, email, username} = req.body;
    db.query('INSERT INTO usersdata (firstName, lastName, email, password, username) VALUE (?, ?, ? , ? ,? )', [firstName, lastName, email, encryptedPassword, username], (err, result) => {
        if (err){
            console.log('Error executing query: ', err.stack);
            res.status(400).send('Error creating user');
            return;
        }
        res.status(201).send('User created successfully');
    })
}

async function signin(req, res) {
    console.log(req.body);
    if (req.body.email && req.body.password) {
        const {email, password} = req.body;
        db.query('')
    }
}

module.exports = {
    signup,
}