const { db } = require("../db/sql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Create a new user
async function signup(req, res) {
  console.log(req.body);
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const { firstName, lastName, email, username } = req.body;
  db.query(
    "INSERT INTO usersdata (firstName, lastName, email, password, username) VALUE (?, ?, ? , ? ,? )",
    [firstName, lastName, email, encryptedPassword, username],
    (err, result) => {
      if (err) {
        console.log("Error executing query: ", err.stack);
        res.status(400).send("Error creating user");
        return;
      }
      res.status(201).send("User created successfully");
    }
  );
}

async function signin(req, res) {
  const { email, password } = req.body;
  if (email !== "" && password !== "") {
    db.query(
      "SELECT password FROM usersdata WHERE email = ?",
      [email],
      async function (error, results, fields) {
        if (error) {
          res.send({
            code: 400,
            failed: "error occurred",
            error: error,
          });
        } else {
          if (results.length > 0) {
            const comparison = await bcrypt.compare(
              password,
              results[0].password
            );

            if (comparison) {
              res.send({
                code: 200,
                success: "login successful",
                id: results[0].id,
                username: results[0].username,
              });
            } else {
              res.send({
                code: 204,
                error: "Email and password does not match",
              });
            }
          } else {
            res.send({
              code: 206,
              error: "Email does not exist",
            });
          }
        }
      }
    );
  } else {
    console.log("Error 204");
    res.status(204).send("Error Occurred");
  }
}

module.exports = {
  signup,
  signin,
};
