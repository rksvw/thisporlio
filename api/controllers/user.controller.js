const {db} = require('../db/sql');

// Create a new user
async function signup(req, res) {
    console.log(req.body);
    const {firstName, lastName, email, password ,username} = req.body;
    db.query('INSERT INTO usersdata (firstName, lastName, email, password, username) VALUE (?, ?, ? , ? ,? )', [firstName, lastName, email, password, username], (err, result) => {
        if (err){
            console.log('Error executing query: ', err.stack);
            res.status(400).send('Error creating user');
            return;
        }
        res.status(201).send('User created successfully');
    })
}

module.exports = {
    signup,
}